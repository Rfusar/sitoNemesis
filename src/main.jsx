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
    Prodotti,
    Docs_API,
} from './pages/init.jsx'

import {dati_prodotti, dati_API} from './dati_pagineProdotti.jsx'


document.body.classList.add("sfondo")
const app = ReactDOM.createRoot(document.getElementById('root'))
const prodotti = dati_prodotti()
const api_docs = dati_API()

app.render(
  <BrowserRouter>
    <Navbar/> 
    
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/web_applicazioni" element={<Web_applicazioni/>}/>
      <Route path="/consulenza_digitale" element={<Consulenza_digitale/>}/>
      
      {api_docs.map((ad, i)=>(
          <Route key={i} path={`/docs/${ad.path}`} element={<Docs_API ApiType={ad.path}/>} />
      ))}
      {prodotti.map((p, i)=>(
        <Route key={i} path={`/prodotti/${p.path}`} element={<Prodotti dati={p}/>}/>
      ))}
    </Routes>
    
    <Footer/>
  </BrowserRouter>
)


