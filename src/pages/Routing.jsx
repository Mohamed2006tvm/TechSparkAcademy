import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from '../auth/LoginPage';
import Workshop from './Workshop';  

const Routing = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/workshop' element={<Workshop/>}/>
            </Routes>    
        </Router>        
    </div>
  )
}

export default Routing