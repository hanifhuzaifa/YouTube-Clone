import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./pages/Home/Home";
import Video from './pages/Video/Video'
import { useState } from "react";

// import './App.css'

function App() {

  const [sidebar, setSidebar]=useState(true);
  
  return (
    <>
    <Navbar setSidebar={setSidebar}/>
    <Routes>
      <Route path="/" element={<Home sidebar={sidebar}/>}/>
      <Route path="/Video/:catogoryId/:VideoId" element={<Video />} />
    </Routes>
   
    </>
  )
}

export default App
