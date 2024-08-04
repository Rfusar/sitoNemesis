export default function Section_due({dati}){
    return (
        <section id="wa_section2">
            <div id="divLinguaggi">
                <div>
                    <p>Linguaggi con cui sviluppiamo</p>
                </div>
                {dati.get_linguaggi.map((l, i)=>(
                    <div key={i}>
                        <img src={`/src/assets/linguaggi/${l.img}`} alt="" height="100"/>
                        <p>{l.title}</p>
                    </div>
                ))}
            </div>


            <div>
                <h1 className="titoloSezione" style={{marginTop: "50px"}}>{dati._titolo}</h1>
            </div>


            <div id="cardServices2">
            {dati._linguaggi.map((d, i)=>(
                <div key={i} className="itemCardService2">
                    <div className="descriptionService2">
                        <h1 style={{textContent: "center"}}>{d.h1}</h1>
                        <p style={{textContent: "center"}}>
                            {d.p}
                        </p>
                    </div>
                    <img src={`/src/assets/linguaggi/${d.img}`} height="200" alt=""/>
                </div>
            ))}
            </div>

        </section>
    )

}
