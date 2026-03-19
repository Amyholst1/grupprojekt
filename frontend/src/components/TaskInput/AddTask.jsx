import "./AddTask.css";

function AddTask({ text = "Add Task", onClick }) {
  return (
    <button className="add-task-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default AddTask;
