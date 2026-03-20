import "./SortBy.css";
import { IoChevronDown } from "react-icons/io5";

function SortBy({ sortBy, setSortBy }) {
  const sortOptions = ["Newest", "Oldest", "A-Z"];

  return (
    <div className="sort-container">
      <div className="sort-wrapper">
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

        <IoChevronDown className="sort-icon" />
      </div>
    </div>
  );
}

export default SortBy;