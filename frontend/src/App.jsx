import './App.css'
import { useState } from 'react'
import Navbar from './components/navbar'
import Filter from './components/Filter/Filter'
import TaskInput from './components/TaskInput/TaskInput'

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
      <Filter 
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
      />
    </>
  )
}

export default App