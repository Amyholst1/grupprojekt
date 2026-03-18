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
  const [notifications, setNotifications]= useState([])

  function showToast(message, type) {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  }

  function showNotification(text) {
    setNotifications(prev => [
      {
        id: Date.now(),
        text
      },
      ...prev
    ])
  }

  return (
    <>
      <Navbar notifications={notifications}/>

      <TaskInput showToast={showToast} showNotification={showNotification}/>

      <div className="filter-sort-container">
        <Filter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <Todolist selectedFilter={selectedFilter} sortBy={sortBy} showNotification={showNotification}/>

      {toast && <ToastMessage message={toast.message} type={toast.type} />}
    </>
  );
}

export default App;
