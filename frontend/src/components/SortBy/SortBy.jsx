import './SortBy.css'

function SortBy({ sortBy, setSortBy }) {
  const sortOptions = ["Newest", "Oldest", "A-Z"];

  return (
    <div className="sort-container">
      <label htmlFor="sort-select" className="sort-label">
        Sort by
      </label>

      <select
        id="sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="sort-select"
      >
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