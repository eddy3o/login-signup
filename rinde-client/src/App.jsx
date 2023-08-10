import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import './App.css'
import React from 'react'
import { Account } from './pages/Account';
import { Principal } from './pages/Principal';

function App() {
  

  return (
    
    <BrowserRouter>

        <Routes> 
          <Route path='/principal' element={<Principal/>} />
          <Route path='/cuenta' element={<Account/>} />
        </Routes>

    </BrowserRouter>
  )
}

export default App;
