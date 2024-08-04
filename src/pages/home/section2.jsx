import './homepage.css'
import {Link} from 'react-router-dom'
import {useRef} from 'react'
import {cardsAnimate} from './animations.jsx'

export default function Section_due({dati}){
    const cards = useRef([])
    cardsAnimate(cards)

    return (
        <section id="section2">
            <div id="cardServices" style={{backgroundColor: "#f0eded"}}>
                <p style={{fontSize: "1.6rem"}}>I sistemi alla quale ci affaciamo</p>
                <div id="cardImgServices">
                {dati.sistemi.map((s, i)=>(
                    <div key={i} className="imgService">
                        <img className="itemImgService" src={`/src/assets/tecnologie/${s.img}`} height="70" alt=""/>
                        <p>{s.name}</p>
                    </div>
                ))}
                </div>
            </div>


            <div id="container1Section2">
                <div id="card1Section2">
                    <p style={{color: "#000", fontSize: "1.2rem", padding: "15px"}}>
                        <i>{dati.description1}</i>
                    </p>
                </div>
            </div>

            <div id="container2Section2">
            {dati.cards.map((c, i)=>(
                <div key={i} className="cardSection2" id="cardDescription1" ref={(c)=>(cards.current[i] = c)}>
                    <div className="intestazioneCardSection2">
                        <img className="imgCardSection2" src={`/src/assets/icone/${c.img}`}/> 
                        <h1>{c.titolo}</h1>
                    </div>
                    <div className="description">
                        <p>{c.description}</p>
                    </div>
                    <Link to={c.link} className="btnDettagli pointer">Vedi Dettagli</Link>
                </div>
            ))}

            </div>
            <div className="linea"></div>
        </section>
    )
}
