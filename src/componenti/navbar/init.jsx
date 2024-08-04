import {Link} from 'react-router-dom'
import './navbar.css'
import {useEffect, useRef, useState} from 'react'
import {useNavbarAnimate, tendinaMenu} from './animation.jsx'
import Prodotti from './menu.jsx'
import sendRequest from './sendRequest.jsx'


//*Variabili
const prodottiNavbar=[
    {nav: "AUTOMAZIONE ORDINI", product: "order_automation"},
    {nav: "GATEWAY SMS E SOCIAL", product: "mass_messaging"},
    {nav: "GESTIONE DOCUMENTALE NPL", product: "documents_NPL"},
    {nav: "GESTIONE DOCUMENTALE FINANZIAMENTI", product: "financial_document_management"},
    {nav: "GESTIONE ASSENZE (con IVR)", product: "absence_management"},
    {nav: "GESTIONE MAGAZZINO (Repository GDPR)", product: "warehouse_management"},
    {nav: "AUTOMAZIONI DOCUMENTI LOGISTICA", product: "logistic_managment_for_paper_documents"},
    {nav: "SCANSIONE BARCODE", product: "lettura_barcode"},
    {nav: "PRICE SCANNER", product: "price_scanner"},
]
const prodottiNavbarAPI = [
    {nav: "PDF", product: "X"},
    {nav: "SMS", product: "X"},
]

//component
export default function Navbar(){
    const navbarRef = useRef(null)
    const [contentMenu, setContentMenu] = useState("")
    useNavbarAnimate(navbarRef);

    return (
        <section id="cardNavbar" ref={navbarRef} >
            <nav id="navbar">
                <div>
                    <Link to="/"><img src="/logoNemesis.svg" alt=""/></Link>
                    <span className='pointer' onMouseOver={()=>tendinaMenu("Prodotti", setContentMenu)}>Prodotti</span>
                    <span className='pointer' onMouseOver={()=>tendinaMenu("API", setContentMenu)}>API</span>
                    <span className="pointer" onClick={sendRequest}>Contatti</span>
                    <Link to="/web_applicazioni">Web e Applicazioni</Link>
                    <Link to="/consulenza_digitale">Consulenza Digitale</Link>
                </div>
            
                <div></div>

            </nav>
            <div id="MenuNavbar">
                <Prodotti name={contentMenu} prodotti={prodottiNavbar} API={prodottiNavbarAPI}/>
            </div>
        </section>
    )
}

