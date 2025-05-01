
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {

  return (

    <BrowserRouter>
     <Navbar/>
    <Routes> 
    
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
