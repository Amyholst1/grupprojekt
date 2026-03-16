import "./Filter.css";

function Filter({ selectedFilter, setSelectedFilter }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="filter-container">
      {filters.map((filter) => (
        <button
        type="button"
          key={filter}
          className={
            selectedFilter === filter
              ? "filter-button selected"
              : "filter-button"
          }
          onClick={() => setSelectedFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Filter;
