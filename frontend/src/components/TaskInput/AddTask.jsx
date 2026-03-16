
function AddTask({ text = "Add Task", onClick }) {
  const style = {
    backgroundColor: "#F97316",
    color: "#FFFFFF",
    border: "none",
    padding: "12px 22px",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "12px",  
    cursor: "pointer",
  };

  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
}

export default AddTask;