
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
function App() {

  return (

    <BrowserRouter>
     <Navbar/>
    <Routes> 
    
      <Route path="/" element={<Home/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
