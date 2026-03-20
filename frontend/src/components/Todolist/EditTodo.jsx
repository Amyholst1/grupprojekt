import { useState, useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

function EditTodo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const inputRef = useRef(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    setNewTitle(todo.title);
  }, [todo.title]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  useEffect(() => {
    function handleEdit(e) {
      if (e.detail === todo.id) {
        setIsEditing(true);
      }
    }
    document.addEventListener("start-edit", handleEdit);
    return () => document.removeEventListener("start-edit", handleEdit);
  }, [todo.id]);

  async function handleUpdate() {
    const trimmed = newTitle.trim();
    if (!trimmed || trimmed === todo.title) {
      setIsEditing(false);
      return;
    }
    try {
      await fetch(`http://localhost:3002/updateTodo/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: trimmed }),
      });
      queryClient.invalidateQueries({ queryKey: ["Todos"] });
    } catch (error) {
      console.error("Error updating title", error);
    } finally {
      setIsEditing(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      handleUpdate();
    } else if (e.key === "Escape") {
      setNewTitle(todo.title);
      setIsEditing(false);
    }
  }

  return isEditing ? (
    <div className="todo-edit">
      <input
        ref={inputRef}
        className="todo-input"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleUpdate}
      />
    </div>
  ) : (
    <div className="todo-view">
      <span className="todo-title">{todo.title}</span>
    </div>
  );
}

export default EditTodo;
