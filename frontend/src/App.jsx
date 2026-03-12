import './App.css'
import { useState } from 'react'
import Navbar from './components/navbar'
import AddTask from './components/AddTask'
import Filter from './components/Filter/Filter'

function App() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  return (
    <>
      <Navbar />
      <AddTask />
      <Filter 
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
      />
    </>
  )
}

export default App