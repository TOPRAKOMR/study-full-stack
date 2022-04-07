import React from 'react'
import {BrowserRouter, Route, Routes, } from "react-router-dom"
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About';
import Home from "../pages/home/Home";

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/pages/home/Home'element={<Home/>}/> 
                <Route path='/pages/about/About'element={<About/>}/> 

            </Routes>

        
        
        </BrowserRouter>

    </div>
  )
}

export default AppRouter
