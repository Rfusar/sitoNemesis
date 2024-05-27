import './navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar(){
  return (
    <nav>
      <Link to="/"><img src="/src/assets/logoNemesis.svg"/></Link>
      <div>
        {titlesNavbar.map((e, i)=>(
          <span key={i} >{e}</span>
        ))}
      </div>
    </nav>
  )
}

const titlesNavbar = []
