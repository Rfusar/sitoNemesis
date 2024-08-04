import './homepage.css'

export default function Section_uno({dati}){
    console.log(dati)
    return (
        <section id="section1" className="sfondo">
            <div id="container1Section1">
                <h1 className="font-one titoloPagina">
                    Soluzioni digitali per i servizi e il commercio
                </h1>
            </div> 
            <div id="container2Section1">
                <div style={{flex: "1", display: "flex", alignItems: "center"}}>
                    <p style={{fontSize: "2rem", color: "#fff", marginTop: "110px"}}>
                        <i>"Rafforza la tua azienda con una solida presenza online.
                        Crea moderne applicazioni e siti Web per gestire vendite,
                        servizi, assistenza e logistica."</i>
                    </p>
                </div>
            </div>
        </section>
    )
}


