import './web_applicazioni.css'

export default function Section_tre({dati}){
    return (
        <section id="wa_section3">
            <div id="wa_card1Section3">
            {dati.vantaggi.map((v, i)=>(
                <div key={i} className="wa_itemCardSecion3">
                    <div style={{display: "flex", flexDirection: "row", paddingTop: "40px"}}>
                        <img src={`/src/assets/icone/${v.img}`} height="70px" alt=""/>
                        <h1 style={{fontSize: "2rem", textAlign: "center"}}>{v.h1}</h1>
                    </div>
                    <p style={{padding: "30px"}}>{v.p}</p>
                </div>
            ))}
            </div>
        </section>
    )
}
