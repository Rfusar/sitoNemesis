import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar(){
    return (
        <section id="cardNavbar">
            <nav id="navbar">
                <div>
                    <img src="/logoNemesis.svg" alt=""/>
                    <span>Prodotti</span>
                    <span>Consuleza</span>
                    <a href="#section4">Contatti</a>
                </div>
            
                <div>
                    <Link to="/"></Link>    
                    <Link to="/"></Link>    
                </div>

            </nav>
            <div style={{height: "0px", backgroundColor: "#fff"}}>
                
            </div>
        </section>
    )
}
