import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import './App.css'
import React, {useState, useEffect} from 'react'
import { Template } from './pages/Template';

function App() {
  

  return (
    
    <BrowserRouter>

        <Routes> 
          
          <Route path='/cuenta' element={<Template/>} />
          <Route path='/principal' element={<Template/>} />
          <Route path='/revision' element={<Template/>} />
          <Route path='/rendir' element={<Template/>} />
          <Route path='/aprovador' element={<Template/>} />
          <Route path='/aprovados' element={<Template/>} />
        </Routes>

    </BrowserRouter>
  )
}

export default App;
