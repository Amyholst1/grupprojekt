import "./AddTask.css";

function AddTask({ text = "Add Task" }) {
  return (
    <button type="submit" className="add-task-btn" aria-label={text}>
      {text}
    </button>
  );
}

export default AddTask;
