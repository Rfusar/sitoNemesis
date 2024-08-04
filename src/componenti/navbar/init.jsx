import {Link} from 'react-router-dom'
import './navbar.css'
import {useEffect, useRef, useState} from 'react'
import {useNavbarAnimate, tendinaMenu} from './animation.jsx'
import Prodotti from './menu.jsx'
import sendRequest from './sendRequest.jsx'


//*Variabili
const prodottiNavbar=[
    {nav: "AUTOMAZIONE ORDINI", product: "order_automation"},
    {nav: "GESTIONE DOCUMENTALE NPL", product: "documents_NPL"},
    {nav: "GESTIONE DOCUMENTALE FINANZIAMENTI", product: "financial_document_management"},
    {nav: "GESTIONE ASSENZE (con IVR)", product: "absence_management"},
    {nav: "GESTIONE MAGAZZINO (Repository GDPR)", product: "warehouse_management"},
    {nav: "AUTOMAZIONI DOCUMENTI LOGISTICA", product: "logistic_managment_for_paper_documents"},
]
const prodottiNavbarAPI = [
    {nav: "SCANSIONE BARCODE", product: "lettura_barcode"},
    {nav: "PRICE SCANNER", product: "price_scanner"},
    {nav: "GATEWAY SMS E SOCIAL", product: "mass_messaging"},
]

//component
export default function Navbar(){
    const navbarRef = useRef(null)
    const [contentMenu, setContentMenu] = useState("")
    useNavbarAnimate(navbarRef);

    return (
        <section id="cardNavbar" ref={navbarRef} >
            <nav id="navbar">
                <div style={{color: "#fff", textDecoration: "none"}}>
                    <Link to="/"><img src="/logoNemesis.svg" alt=""/></Link>
                    <Link className="link" to="/web_applicazioni">Web e Applicazioni</Link>
                    <Link className="link" to="/consulenza_digitale">Consulenza Digitale</Link>
                    <Link className="pointer link" onClick={sendRequest}>Contatti</Link>
                    <span 
                            style={{borderLeft: ".5px solid red", paddingLeft: "10px"}}
                            className='pointer link' onMouseOver={()=>tendinaMenu("Prodotti", setContentMenu)}>
                        Prodotti
                    </span>
                    <span 
                        style={{borderLeft: ".5px solid red", paddingLeft: "10px"}}
                        className='pointer link' onMouseOver={()=>tendinaMenu("API", setContentMenu)}>API</span>
                </div>
            
                <div></div>

            </nav>
            <div id="MenuNavbar">
                <Prodotti name={contentMenu} prodotti={prodottiNavbar} API={prodottiNavbarAPI}/>
                <section></section>
            </div>
        </section>
    )
}

