import { FiCalendar } from "react-icons/fi";

function TaskInput({ value, onChange, onAdd }) {

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "10px"
  };

  const inputWrapper = {
    position: "relative",
    flex: 1
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 40px 14px 16px",
    borderRadius: "10px",
    border: "1px solid #E5E7EB",
    fontSize: "14px",
    outline: "none"
  };

  const iconStyle = {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>

      <div style={inputWrapper}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={value}
          onChange={onChange}
          style={inputStyle}
        />

        <span style={iconStyle}>
        <FiCalendar className="calendar-icon" /></span>

        
      </div>

    </div>
  );
}

export default TaskInput;