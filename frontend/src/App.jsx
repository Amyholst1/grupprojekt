import './App.css'
import Navbar from './components/navbar'
import AddTask from './components/AddTask'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />

      <div>
        <AddTask />
      </div>

      <Footer />
    </>
  )
}

export default App