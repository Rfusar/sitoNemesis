import {Link} from 'react-router-dom'
import './navbar.css'

export default function Navbar(){
    return (
        <nav id="navbar">
            <div>
                <img src="/logoNemesis.svg" alt=""/>
                <span>Prodotti</span>
                <span>Consuleza</span>
                <span>Contatti</span>
            </div>
            
            <div>
                <Link to="/">Accedi</Link>    
                <Link to="/">Registrati</Link>    
            </div>
        </nav>
    )
}
