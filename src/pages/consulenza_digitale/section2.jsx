export default function Section_due({dati}){
    return (
        <section id="cd_section2">
            <div id="cd_vantaggi">
                <div>
                    <p>{dati.description}</p>
                </div>

                <div id="cd_card2Section2">
                {dati.obbiettivi.map((o, i)=>(
                    <div key={i}>
                        <div className="imgOK"><img src="/src/assets/icone/ok.png" height="50" alt=""/></div>
                        <p>{o}</p>
                    </div>

                ))}
                </div>
            </div>

            <div style={{display: "grid", gridTemplateColumns: "auto auto auto", padding: "5% 20%", gap: "5px", backgroundColor: "#000"}}>
            {dati.cards.map((c, i)=>(
                <div className="cd_card">
                    <h1>
                        <img src="/src/assets/icone/circle.svg" height="20px"/>
                        {c.titolo}</h1>
                    <p>{c.description}</p>
                </div>
    
            ))}   
            </div>
        </section>
    )
}
