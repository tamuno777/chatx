import { useState } from 'react'
import Login from './Homepage/login';
import Chatapp from './Chatapp/chatapp';
import Logout from './Logout/logout';
import { Route, Routes } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';


import './App.css'

function Routers() {
    const Friend = localStorage.getItem("Friend");

  const location = useLocation();


  return (
    <>
   <div className='banner'>
    {/* <AnimatePresence mode="wait"> */}
       
          
          
          <Routes location={location}
                key={location.pathname}>
          <Route path="/" element={<Login />} />
          <Route path="/ChatX" element={<Chatapp Friend={Friend} />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
        

    {/* </AnimatePresence> */}
   </div>
     
    
    </>
  )
}

export default Routers
