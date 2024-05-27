import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css'

import Navbar from './componenti/navbar/navbar.jsx'
import {Homepage, Import} from './pages/pages.jsx'

const app = ReactDOM.createRoot(document.getElementById('root'))
app.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Import" element={<Import />} />
    </Routes>
  </BrowserRouter>
)
