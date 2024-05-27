import './homepage.css'
import AnimationCard from './animations.js'
import {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {gsap} from 'gsap'

export default function Homepage_init(){
  const main = useRef(null)
  useEffect(()=>{
    let ctx = gsap.context(()=>{AnimationCard(gsap)}, main)
    return ()=>ctx.revert()
  }, [])

  return (
    <main>
      {cards.map((e,i)=>(
        <div className="card" color={e.color} key={i}>
          <Link to={e.title}>
            <h1>{e.title}</h1>
            <p>{e.description}</p>
          </Link>
        </div>
      ))}   
    </main>
  )
}
const cards = [
  {
    title: "Import",
    description: "Servizio che importa file",
    color: "purple"
  },
  {
    title: "Trasformation",
    description: "Servizio che converte file",
    color: "#1ab3c4"
  },
  {
    title: "Database",
    description: "Servizio che comunica con DB",
    color: "#c4281a"
  },
  {
    title: "Intelligenza Artificiale",
    description: "Servizio che comunica con AI",
    color: "#10cc17"
  }
]

