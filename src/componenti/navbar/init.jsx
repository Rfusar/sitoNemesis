import {Link} from 'react-router-dom'
import './navbar.css'
import {useEffect, useRef, useState} from 'react'
import {useNavbarAnimate, tendinaMenu} from './animation.jsx'
import Prodotti from './menu.jsx'


export default function Navbar(){
    const navbarRef = useRef(null)
    const [contentMenu, setContentMenu] = useState("")
    useNavbarAnimate(navbarRef);

    return (
        <section id="cardNavbar" ref={navbarRef} >
            <nav id="navbar">
                <div>
                    <img src="/logoNemesis.svg" alt=""/>
                    <span className='pointer' onMouseOver={()=>tendinaMenu("Prodotti", setContentMenu)}>Prodotti</span>
                    <span className='pointer' onMouseOver={()=>tendinaMenu("API", setContentMenu)}>API</span>
                    <span>Consuleza</span>
                    <a href="#section4">Contatti</a>
                </div>
            
                <div>
                    <Link to="/"></Link>    
                    <Link to="/"></Link>    
                </div>

            </nav>
            <div id="MenuNavbar">
                <Prodotti prodotto={contentMenu}/>
            </div>
        </section>
    )
}

