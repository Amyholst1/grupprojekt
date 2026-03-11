import './App.css'
import { useState } from 'react'
import Navbar from './components/navbar'
import AddTask from './components/AddTask'
import Filter from './components/Filter/Filter'
import TaskInput from './components/TaskInput'

function App() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  return (
    <>
      <Navbar />
      <TaskInput />
      <AddTask />
      <Filter 
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
      />
    </>
  )
}

export default App