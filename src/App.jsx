import { useState } from 'react'
import Navbar from './Component/Navbar';
import reactDOM from 'react-dom';

import { Route, Routes } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Blogs from './Pages/Blogs';
// import './App.css'
import Footer from './Component/Footer';

const App =()=>{
  return(
    <div className='h-[calc(100vh-7rem)] max-w-4xl mx-auto px-10 py-16'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
      <Footer/>
    </div> 
  )
}

export default App;