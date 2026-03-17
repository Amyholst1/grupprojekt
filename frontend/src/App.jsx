import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Filter from "./components/Filter/Filter";
import TaskInput from "./components/TaskInput/TaskInput";
import Todolist from "./components/Todolist/Todolist";
import ToastMessage from "./components/ToastMessage/ToastMessage";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("All");
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
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Todolist></Todolist>
      {toast && <ToastMessage message={toast.message} type={toast.type} />}
    </>
  );
}

export default App;
