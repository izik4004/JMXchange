
import './App.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
 

  return (
    <div className="App">
      <Router>
          {/* <Routes> */}
          <Navbar/>
          {/* </Routes> */}
      </Router>
    </div>
  )
}

export default App
