import './automazione_ordini.css'

export default function Section_tre({d}){
    return (
        <section id="prodotto_section3">
            <div id="prodotto_card1Section3">
               <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1 style={{fontSize: "3rem"}}>Integra i tuoi sistemi aziendali con {d.name}</h1> 
               </div> 
               <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src="/src/assets/icone/schermate.png" alt="" width="700"/>
                </div> 
            </div>

            <div id="prodotto_grid">
                <div>
                    <div className="titolo_grid">
                        <svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z" fill="#fff"></path></svg>
                        <h1 className="testo_titolo_grid">Veloce</h1>
                    </div>
                    <p>Un'architettura snella in grado di lavorare anche nelle situazioni di rete incerta</p>
                </div>
                <div>
                    <div className="titolo_grid">
                        <svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#fff" height="10" width="13" y="8.5" x="3.5"></rect><path fill="none" stroke="#fff" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"></path></svg>
                        <h1 className="testo_titolo_grid">Sicuro</h1>
                    </div>
                    <p>Infrastrutture certificate, GDPR compliance e privacy garantita</p>
                </div>
                <div>
                    <div className="titolo_grid">
                        <svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#fff" cx="6.11" cy="3.55" rx="2.11" ry="2.15"></ellipse><ellipse fill="none" stroke="#fff" cx="6.11" cy="15.55" rx="2.11" ry="2.15"></ellipse><circle fill="none" stroke="#fff" cx="13.15" cy="9.55" r="2.15"></circle><rect x="1" y="3" width="3" height="1" fill="#fff"></rect><rect x="10" y="3" width="8" height="1" fill="#fff"></rect><rect x="1" y="9" width="8" height="1" fill="#fff"></rect><rect x="15" y="9" width="3" height="1" fill="#fff"></rect><rect x="1" y="15" width="3" height="1" fill="#fff"></rect><rect x="10" y="15" width="8" height="1" fill="#fff"></rect></svg>
                        <h1 className="testo_titolo_grid">Scalabile</h1>
                    </div>
                    <p>Kubernetes permette di gestire milioni di richeiste simultanee</p>
                </div>
                <div>
                    <div className="titolo_grid">
                        <svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2" fill="#fff"></rect><rect x="5" y="3" width="1" height="2" fill="#fff"></rect><rect x="7" y="3" width="1" height="2" fill="#fff"></rect><rect x="16" y="3" width="1" height="1" fill="#fff"></rect><rect x="16" y="10" width="1" height="1" fill="#fff"></rect><circle fill="none" stroke="#fff" cx="9.9" cy="17.4" r="1.4"></circle><rect x="3" y="10" width="1" height="2" fill="#fff"></rect><rect x="5" y="10" width="1" height="2" fill="#fff"></rect><rect x="9.5" y="14" width="1" height="2" fill="#fff"></rect><rect x="4" y="17" width="6" height="1" fill="#fff"></rect><rect x="11" y="17" width="6" height="1" fill="#fff"></rect><rect fill="none" stroke="#fff" x="1.5" y="1.5" width="17" height="5"></rect><rect fill="none" stroke="#fff" x="1.5" y="8.5" width="17" height="5"></rect></svg>
                        <h1 className="testo_titolo_grid">APIs</h1>
                    </div>
                    <p>Integra le tue infrastrutture grazie alle nostre APIs</p>
                </div>
                <div>
                    <div className="titolo_grid">
                        <svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#fff" x="3.5" y="3.5" width="5" height="5"></rect><rect fill="none" stroke="#fff" x="11.5" y="3.5" width="5" height="5"></rect><rect fill="none" stroke="#fff" x="11.5" y="11.5" width="5" height="5"></rect><rect fill="none" stroke="#fff" x="3.5" y="11.5" width="5" height="5"></rect></svg>
                        <h1 className="testo_titolo_grid">Dashboard</h1>
                    </div>
                    <p>Interfacce semplici, ergonomiche ed efficaci per gestire la tua attivita</p>
                </div>
                <div>
                    <div className="titolo_grid">
                        <svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  fill="#fff"d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"></path></svg>
                        <h1 className="testo_titolo_grid">Supporto</h1>
                    </div>
                    <p>Nemesis Solution fornisce un supporto rapido e puntuale 24/7</p>
                </div>


            </div>
        </section>

    )
}
