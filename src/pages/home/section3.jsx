import './homepage.css'

export default function Section_tre(){
    return (
        <section id="section3">
            <h1 className="TitoloCard">Soluzioni per l'automazione intelligente</h1>

            <div id="cardServices2">
                <div className="itemCardService2">
                    <div className="descriptionService2">
                        <h1>Integrazione sistemi</h1>
                        <p>
                            Integra facilmente soluzioni AI di terze parti e strumenti ML open source come Tensorflow.js nei tuoi sistemi digitali.
                        </p>
                    </div>
                    <img src="/src/assets/api.svg" height="200" alt=""/>
                </div>
                <div className="itemCardService2">
                    <img src="/src/assets/server.svg" height="200" alt=""/>
                    <div className="descriptionService2">
                        <h1>Reti e infrastruttura</h1>
                        <p>
                            Trasforma il modo in cui le persone collaborano all'interno delle aziende e con clienti e partner. 
                            Consenti ai dipendenti di lavorare in tutta sicurezza ovunque e su qualsiasi dispositivo.
                        </p>
                    </div>
                </div>
                <div className="itemCardService2">
                    <div className="descriptionService2">
                        <h1>Analisi dati</h1>
                        <p>Estrai informazioni dai dati con una suite completa di strumenti di analisi e di machine learning.</p>
                    </div>
                    <img src="/src/assets/filter.svg" height="200" alt=""/>
                </div>
            </div>

            <div id="cardTecnologie">
                <img src="/src/assets/docker.svg" alt="" height="70"/>
                <img src="/src/assets/kubernets.svg" alt="" height="70"/>
                <img src="/src/assets/nodejs.svg" alt="" height="70"/>
                <img src="/src/assets/tensorflow-2.svg" alt="" height="70"/>
            </div>
            
        </section>
    )
}
