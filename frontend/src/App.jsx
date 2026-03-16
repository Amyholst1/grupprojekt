import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import Filter from './components/Filter/Filter'
import TaskInput from './components/TaskInput/TaskInput'
import Todolist from './components/Todolist/Todolist'
import SortBy from './components/SortBy/SortBy'


function App() {
  const [selectedFilter, setSelectedFilter] = useState("All")
   const [tasks, setTasks] = useState([])

  function handleAddTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  return (
    <>
      <Navbar />
      <TaskInput onAddTask={handleAddTask} />

    <div className="filter-sort-container">
    <Filter
    selectedFilter={selectedFilter}
    setSelectedFilter={setSelectedFilter}
   />
    <SortBy
    sortBy={selectedFilter}
    setSortBy={setSelectedFilter}
   />
   </div>
      <Todolist></Todolist>
    </>
  )
}

export default App