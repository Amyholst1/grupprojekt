import DeleteTodo from "./DeleteTodo";
import Checkbox from "./Checkbox";
import "./Todolist.css";

function Todolist({ tasks, selectedFilter, sortBy, showNotification }) {
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
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <div className="listleft">
            <Checkbox todo={todo} />
            <span>{todo.title}</span>
          </div>

          <div className="listright">
            <small>{todo.date}</small>
            <DeleteTodo
              id={todo.id}
              title={todo.title}
              showNotification={showNotification}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todolist;
