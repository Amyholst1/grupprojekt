import { useState } from "react";
import DeleteTodo from "./DeleteTodo";
import Checkbox from "./Checkbox";
import "./TodoList.css";
import EditTodo from "./EditTodo";
import { LuSquarePen } from "react-icons/lu";

function TodoList({ tasks, selectedFilter, sortBy, showNotification }) {
  const [editingTodoId, setEditingTodoId] = useState(null);
  let filteredTodos = [...tasks];

  // filter
  if (selectedFilter === "Active") {
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);
  } else if (selectedFilter === "Completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.completed);
  }

  // sort
  if (sortBy === "Newest") {
    filteredTodos.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  } else if (sortBy === "Oldest") {
    filteredTodos.sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0));
  } else if (sortBy === "A-Z") {
    filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <div className="listleft">
              <Checkbox todo={todo} />
              <EditTodo
                todo={todo}
                isEditing={editingTodoId === todo.id}
                onStartEdit={() => setEditingTodoId(todo.id)}
                onStopEdit={() => setEditingTodoId(null)}
              />
            </div>

            <div className="listright">
              <small>{todo.date}</small>
              <div className="todo-actions">
                <button
                  className="icon-btn"
                  onClick={() => setEditingTodoId(todo.id)}
                >
                  <LuSquarePen size={16} />
                </button>

                <DeleteTodo
                  id={todo.id}
                  title={todo.title}
                  showNotification={showNotification}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
