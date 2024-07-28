import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

import Navbar from '/src/componenti/navbar/init.jsx'
import {
    Homepage, 
    Web_applicazioni,
    Automatizza_processi
} from './pages/init.jsx'


const app = ReactDOM.createRoot(document.getElementById('root'))
app.render(
  <BrowserRouter>
    <Navbar/> 
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/web_applicazioni" element={<Web_applicazioni />} />
      <Route path="/automatizza_processi" element={<Automatizza_processi />} />
    </Routes>
  </BrowserRouter>
)
