<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import LandingPage from "./pages/mainLanding/LandingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/landing" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import LandingPage from './Components/LandingPage'
import { CreateEvent } from './Components/CreateEvent'


function App() {
  

  return (
    <>  <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='LandingPage' element={<LandingPage/>}/>
          <Route path='CreateEvent' element={<CreateEvent/>}/>        
        </Routes>
       
       
    </>
    );
}
>>>>>>> master

export default App;
