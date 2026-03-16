import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import Filter from './components/Filter/Filter'
import TaskInput from './components/TaskInput/TaskInput'
import Todolist from './components/Todolist/Todolist'


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
      <Todolist></Todolist>
    </>
  )
}

export default App