import "./ToastMessage.css";

function ToastMessage({ message, type = "success" }) {
  const icons = {
    success: "✔",
    error: "✖",
  };

  return (
    <div className={`toast ${type}`}>
      <span>{icons[type]}</span>
      <span>{message}</span>
    </div>
  );
}

export default ToastMessage;
