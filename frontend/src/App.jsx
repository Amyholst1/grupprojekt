import './App.css'
import Navbar from './components/navbar'
import AddTask from './components/AddTask'
import Todolist from './components/Todolist/Todolist'

function App() {
  return (
    <>
      <Navbar />
      <AddTask />
      <Todolist/>
    </>
  )
}

export default App