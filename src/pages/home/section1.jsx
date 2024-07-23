import './homepage.css'

export default function Section_uno(){
    return (
        <section id="section1" className="sfondo">
            <div className="overlay"></div>
            <div id="container1Section1">
                <h1 className="font-one" style={{fontSize: "5.3rem", marginLeft: "80px", marginTop: "-40px"}}>
                    Soluzioni digitali per i servizi e il commercio
                </h1>
            </div> 
            <div id="container2Section1">
                <div style={{flex: "1", display: "flex", alignItems: "center"}}>
                    <p style={{fontSize: "2rem", color: "#fff"}}>
                        Rafforza la tua azienda con una solida presenza online.
                        Crea moderne applicazioni e siti Web per gestire vendite,
                        servizi, assistenza e logistica.
                    </p>
                </div>
                <div style={{flex: "2"}}></div>
            </div>
        </section>
    )
}
