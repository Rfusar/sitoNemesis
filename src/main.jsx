import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import Navbar from '/src/componenti/navbar/init.jsx';
import Footer from '/src/componenti/footer/init.jsx';
import {
    Homepage, 
    Web_applicazioni,
    Consulenza_digitale,
    Prodotti,
    Docs_API,
} from './pages/init.jsx';

import { dati_prodotti, dati_API } from './dati_pagineProdotti.jsx';

document.body.classList.add("sfondo");
const prodotti = dati_prodotti();
const api_docs = dati_API();


const link_prodotti = [
    "/prodotti/price_scanner", "/prodotti/mass_messaging", "/prodotti/lettura_barcode",
    ""
] 
const usePathChange = (callback) => {
  const location = useLocation();
  useEffect(() => {
    callback(location.pathname);
  }, [location, callback]);
};

const App = () => {
  const [Path, setPath] = useState({
        now: "",
        last:""
  })
  usePathChange((path) => {
       Path.now = path
      if (path.now != Path.last && Path.last != "" && Path.now.includes("/prodotti/") ){
          try{
                document.querySelector("#animationCard").animate([
                    {opacity: 0, translate: "-20px 0 0"},
                    {opacity: 1, translate: "0 0 0"},

                ], {
                    duration: 1000,
                    fill: "forwards"
                })
          }
          catch (errore){console.log(errore)}

      } 
      else{Path.last = path}
  })

  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/web_applicazioni" element={<Web_applicazioni/>}/>
        <Route path="/consulenza_digitale" element={<Consulenza_digitale/>}/>
        {api_docs.map((ad, i) => (
          <Route key={i} path={`/docs/${ad.path}`} element={<Docs_API ApiType={ad.path}/>} />
        ))}
        {prodotti.map((p, i) => (
          <Route key={i} path={`/prodotti/${p.path}`} element={<Prodotti dati={p}/>}/>
        ))}
      </Routes>
      <Footer/>
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

