import './automazione_ordini.css'

export default function Section_due({d}){
    return (
        <>
            <section id="prodotto_section2">
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src="/src/assets/dashboard.png" alt="" width="800" />
                </div>

                <div style={{display: "flex", justifyContent: "center", flexDirection: "column", padding:"20px", alignItems: "center", color: "#000"}}>
                    <h1 style={{marginBottom: "20px", fontSize: "1.4rem"}}>{d.description1}</h1>
                    <p style={{fontSize: "1.2rem"}}>{d.description2}</p>
                </div>
            </section>
            
            <div style={{display: "flex", justifyContent: "space-around", marginBottom: "40px", flexDirection: "row", padding:"0 100px", alignItems: "center", color: "#000"}}>
                <div>
                    <h1>Tecnologie</h1>
                    <p>GoLang, GraphQL, Kubernetes, React.</p>
                </div> 
                <div>
                    <img src="/src/assets/linguaggi/go-logo.svg" alt="" width="100"/>
                </div>
                <div>
                    <img src="/src/assets/tecnologie/graphql-logo.svg" alt="" width="100"/>
                </div>
                <div>
                    <img src="/src/assets/tecnologie/kubernets.svg" alt="" width="100"/>
                </div>
                <div>
                    <img src="/src/assets/linguaggi/react.svg" alt="" width="100"/>
                </div>
            </div>
        </>
    )
}
