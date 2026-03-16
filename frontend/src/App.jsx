import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
<<<<<<< HEAD
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
=======
import Navbar from './components/navbar'
import AddTask from './components/AddTask'
import Todolist from './components/Todolist/Todolist'
import Filter from './components/Filter/Filter'

function App() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  
  return (
    <>
      <Navbar />
      <AddTask />
    
      <Todolist/>
    
>>>>>>> 96db7d198f17636acc4cc6a8547e4a499bb2d97c
      <Filter 
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
      />
<<<<<<< HEAD
      <Todolist></Todolist>
=======
>>>>>>> 96db7d198f17636acc4cc6a8547e4a499bb2d97c
    </>
  )
}

export default App