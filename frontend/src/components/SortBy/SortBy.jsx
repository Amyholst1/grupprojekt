import "./SortBy.css";

function SortBy({ sortBy, setSortBy }) {
  const sortOptions = ["Newest", "Oldest", "A-Z"];

  return (
    <div className="sort-container">
      <select
        id="sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className={`sort-select ${sortBy ? "selected" : "placeholder"}`}
      >
        <option value="" disabled>
          Sort by
        </option>

        {sortOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBy;