import { useState, useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { updateTaskTitleAPI } from "../../api/tasks";

function EditTodo({ todo, isEditing, onStartEdit, onStopEdit }) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const inputRef = useRef(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isEditing) {
      setNewTitle(todo.title);
    }
  }, [isEditing, todo.title]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  async function handleUpdate() {
    const trimmed = newTitle.trim();
    if (!trimmed || trimmed === todo.title) {
      onStopEdit();
      return;
    }
    try {
      await updateTaskTitleAPI(todo.id, trimmed);
      queryClient.invalidateQueries({ queryKey: ["Todos"] });
    } catch (error) {
      console.error("Error updating title", error);
    } finally {
      onStopEdit();
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      handleUpdate();
    } else if (e.key === "Escape") {
      setNewTitle(todo.title);
      onStopEdit();
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
      <span
        className={`todo-title ${todo.completed ? "completed" : ""}`}
        onDoubleClick={onStartEdit}
      >
        {todo.title}
      </span>
    </div>
  );
}

export default EditTodo;
