import './homepage.css'
import {Link} from 'react-router-dom'
import {useRef} from 'react'
import {cardsAnimate} from './animations.jsx'

export default function Section_due(){
    const cards = useRef([])
    cardsAnimate(cards)

    return (
        <section id="section2">
            <div id="cardServices">
                <p style={{fontSize: "1.6rem"}}>I sistemi alla quale ci affaciamo</p>
                <div id="cardImgServices">
                    <div className="imgService">
                        <img className="itemImgService" src="/src/assets/tecnologie/microsoft.svg" height="70" alt=""/>
                        <p>MICROSOFT</p>
                    </div>
                    <div className="imgService">
                        <img className="itemImgService" src="/src/assets/tecnologie/google-cloud.svg" height="70" alt=""/>
                        <p>GOOGLE CLOUD</p>
                    </div>
                    <div className="imgService">
                        <img className="itemImgService" src="/src/assets/tecnologie/linux.png" height="70" alt=""/>
                        <p>LINUX</p>
                    </div>
                </div>
            </div>


            <div id="container1Section2">
                <div id="card1Section2">
                    <p style={{color: "#000", fontSize: "1.2rem", padding: "15px"}}>
                        <i>"Nemesis affianca la tua azienda nello sviluppo di strumenti digitali in grado di sfruttare pienamente il potenziale 
                        del World Wide Web e dei moderni sistemi informatici.
                        Gestisci in maniera più profittevelo e agile la tua attività, crea un ambiente di lavoro performante e 
                        coinvolgente per collaboratori e dipendenti.
                        Offri ai tuoi clienti un accesso rapido a opzioni d'acquisto, assistenza, funzioni logistiche e amministrative"</i>
                    </p>
                </div>
            </div>

            <div id="container2Section2">
                <div className="cardSection2" id="cardDescription1" ref={(c)=>(cards.current[0] = c)}>
                    <div className="intestazioneCardSection2">
                        <img className="imgCardSection2" src="https://www.nemesisag.com/images/icone/link%20%281%29.svg"/> 
                        <h1>Siti Web e applicazioni</h1>
                    </div>
                    <div className="description">
                        <p>
                            Velocità, integrazione, affidabilità e coinvolgimento, le nostre semplici regole per sviluppare 
                            applicazioni moderne. Nemesis è full-stack service development.
                        </p>
                    </div>
                    <Link to="/web_applicazioni" className="btnDettagli pointer">Vedi Dettagli</Link>
                </div>

        
                <div className="cardSection2" id="cardDescription3" ref={(c)=>(cards.current[1] = c)}>
                    <div className="intestazioneCardSection2">
                        <img className="imgCardSection2" src="https://www.nemesisag.com/images/icone/brain%20%281%29.svg"/>
                        <h1>Consulenza per il digitale</h1>
                    </div>
                    <div className="description">
                        <p>
                            Affianchiamo i tuoi manager e dipendenti nel percorso di trasformazione digitale 
                            dell'azienda, disegnando processi, servizi e applicazioni a misura d'essere umano.
                        </p>
                    </div>
                    <Link to="/consulenza_digitale" className="btnDettagli pointer">Vedi Dettagli</Link>
                </div>
            </div>
            <div className="linea"></div>
        </section>
    )
}
