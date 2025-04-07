import { useEffect, useState } from 'react'
import Navbar from './Component/Navbar';
import reactDOM from 'react-dom';
import { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Blogs from './Pages/Blogs';
// import './App.css'
import Footer from './Component/Footer';
import { ThemeContext } from './Context/theme';

const App =()=>{
    const {themeMode} = useContext(ThemeContext);

    useEffect(()=>{
      document.querySelector('body').classList.remove('dark','light')
      document.querySelector('body').classList.add(themeMode)
    },[themeMode])

  return(
    //  original ht value h-[calc(100vh-7rem)]
    // h-[calc(100vh-1rem)]
    <div className=' max-w-5xl mx-auto px-12 pt-2  '>
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