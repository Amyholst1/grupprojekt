import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import TaskInput from "./components/TaskInput/TaskInput";
import Todolist from "./components/Todolist/Todolist";
import SortBy from "./components/SortBy/SortBy";
import ToastMessage from "./components/ToastMessage/ToastMessage";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [toast, setToast] = useState(null);

  function showToast(message, type) {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  }

  return (
    <>
      <Navbar />

      <TaskInput showToast={showToast} />

      <div className="filter-sort-container">
        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <Todolist selectedFilter={selectedFilter} sortBy={sortBy} />

      {toast && <ToastMessage message={toast.message} type={toast.type} />}
    </>
  );
}

export default App;
