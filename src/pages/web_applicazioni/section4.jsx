import './web_applicazioni.css'

export default function Section_quattro({dati}){
    return (
        <section id="wa_section4">
            <div style={{height: "30%"}}>
                <p>{dati.frase_impatto}</p>
                <i>- Andrea Lugo, CEO</i>
            </div>

            <div style={{height: "20%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
            {dati.cards.map((e, i)=>(
                <div>
                    <img src={`/src/assets/tecnologie/${e.img}`} alt="" height="50"/>
                    <h1>{e.titolo}</h1>
                    <p>{e.description}</p>
                </div>

            ))}
            </div>
            
            <div style={{display: "grid", gridTemplateColumns: "auto auto auto", padding: "0 30%", height: "40%"}}>
            {dati.google_cards.map((e, i)=>(
                <div>
                    <img src={`/src/assets/tecnologie/google/${e.img}`} alt="" height="50"/>
                    <h1 style={{textAlign: "center"}}>{e.titolo}</h1>
                </div>
            ))}
            </div>
        </section>
    )
}
