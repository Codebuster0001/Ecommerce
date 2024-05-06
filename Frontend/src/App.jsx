import Home from "./Home/Home"
import { Route,Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import Login from "./components/Login";



function App() {
 

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
     
        <Route path="/login" element={<Login />} />
     
        <Route path="/courses" element={<Courses />} />
   
      </Routes>
 
    </>
  )
}

export default App
