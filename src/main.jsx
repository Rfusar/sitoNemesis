import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

import Navbar from '/src/componenti/navbar/init.jsx'
import Footer from '/src/componenti/footer/init.jsx'
import {
    Homepage, 
    Web_applicazioni,
    Consulenza_digitale,
    Prodotti
} from './pages/init.jsx'

import dati_prodotti from './dati_pagineProdotti.jsx'


const app = ReactDOM.createRoot(document.getElementById('root'))
const prodotti = dati_prodotti()

app.render(
  <BrowserRouter>
    <Navbar/> 
    
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/web_applicazioni" element={<Web_applicazioni/>}/>
      <Route path="/consulenza_digitale" element={<Consulenza_digitale/>}/>
      
      {prodotti.map((p, i)=>(
        <Route key={i} path={`/prodotti/${p.path}`} element={<Prodotti dati={p}/>}/>
      ))}
    </Routes>
    
    <Footer/>
  </BrowserRouter>
)


