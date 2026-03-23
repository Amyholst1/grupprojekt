import "./DateInput.css";

function DateInput({ date, setDate }) {
  return (
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="date-input"
      aria-label="Choose a due date"
    />
  );
}
export default DateInput;
