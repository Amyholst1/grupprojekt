import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import TaskInput from "./components/TaskInput/TaskInput";
import TodoList from "./components/TodoList/TodoList";
import SortBy from "./components/SortBy/SortBy";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Footer from "./components/Footer/Footer";
import TaskProgress from "./components/TaskProgress/TaskProgress";
import { useQuery } from "@tanstack/react-query";
import CookieBanner from "./components/CookieBanner/CookieBanner";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [toast, setToast] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Todos"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3002/getTodos");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;

  function showToast(message, type) {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  }

  function showNotification(text, type) {
    setNotifications((prev) => [
      {
        id: Date.now(),
        text,
        type,
      },
      ...prev,
    ]);
  }

  return (
    <>
      <Navbar notifications={notifications} />
      <div className="app-container">
        <TaskProgress tasks={tasks} />

        <TaskInput showToast={showToast} showNotification={showNotification} />

        <div className="filter-sort-container">
          <Filter
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />

          <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        </div>

        <TodoList
          tasks={tasks}
          selectedFilter={selectedFilter}
          sortBy={sortBy}
          showNotification={showNotification}
        />

        {toast && <ToastMessage message={toast.message} type={toast.type} />}
        <CookieBanner />
      </div>

      <Footer />
    </>
  );
}

export default App;
