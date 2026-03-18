import "./DateInput.css";

function DateInput({ date, setDate }) {
  return (
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="date-input"
    />
  );
}
export default DateInput;
