
function AddTask({ text = "Add Task", onClick }) {
  const style = {
    backgroundColor: "#F97316",
    color: "#FFFFFF",
    border: "none",
    padding: "18px 48px",
    fontSize: "24px",
    fontWeight: "600",
    borderRadius: "9px",  
    cursor: "pointer",
  };

  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
}

export default AddTask;