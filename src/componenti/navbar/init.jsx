import {Link} from 'react-router-dom'
import './navbar.css'
import {useEffect, useRef, useState} from 'react'
import {useNavbarAnimate, tendinaMenu} from './animation.jsx'
import Prodotti from './menu.jsx'

import sendRequest from './sendRequest.jsx'


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
                <Prodotti prodotto={contentMenu}/>
            </div>
        </section>
    )
}

