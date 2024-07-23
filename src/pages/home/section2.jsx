import './homepage.css'

export default function Section_due(){
    return (
        <section id="section2" className="sfondo">
            <div id="container1Section2">
                <div id="card1Section2">
                    <p style={{color: "#000", fontSize: "1.5rem", padding: "15px"}}>
                        Nemesis affianca la tua azienda nello sviluppo di strumenti digitali in grado di sfruttare pienamente il potenziale 
                        del World Wide Web e dei moderni sistemi informatici.
                        Gestisci in maniera più profittevelo e agile la tua attività, crea un ambiente di lavoro performante e 
                        coinvolgente per collaboratori e dipendenti.
                        Offri ai tuoi clienti un accesso rapido a opzioni d'acquisto, assistenza, funzioni logistiche e amministrative
                    </p>
                </div>
            </div>

            <div id="container2Section2">
                <div className="cardSection2" id="cardDescription1">
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
                    <button className="btnDettagli">Vedi Dettagli</button>
                </div>

                <div className="cardSection2" id="cardDescription2">
                    <div className="intestazioneCardSection2">
                        <img className="imgCardSection2" src="https://www.nemesisag.com/images/icone/coding.svg" />
                        <h1>Automazione processi</h1>
                    </div>
                    <div className="description">
                        <p>
                            Automatizza processi e attività aziendali col supporto di Machine Learning e Intelligenza Artificiale. 
                            Sviluppa applicazioni e funzioni adeguate ai tuoi obiettivi.
                        </p>
                    </div>
                    <button className="btnDettagli">Vedi Dettagli</button>
                </div>
        
                <div className="cardSection2" id="cardDescription3">
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
                    <button className="btnDettagli">Vedi Dettagli</button>
                </div>
            </div>

        </section>
    )
}
