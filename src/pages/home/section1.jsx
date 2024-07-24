import './homepage.css'

export default function Section_uno(){
    return (
        <section id="section1" className="sfondo">
            <div id="container1Section1">
                <h1 className="font-one" style={{fontSize: "5.3rem", marginLeft: "80px", marginTop: "-40px"}}>
                    Soluzioni digitali per i servizi e il commercio
                </h1>
            </div> 
            <div id="container2Section1">
                <div style={{flex: "1", display: "flex", alignItems: "center"}}>
                    <p style={{fontSize: "2rem", color: "#fff"}}>
                        <i>"Rafforza la tua azienda con una solida presenza online.
                        Crea moderne applicazioni e siti Web per gestire vendite,
                        servizi, assistenza e logistica."</i>
                    </p>
                </div>
                <div id="cardServices">
                    <p style={{fontSize: "1.6rem"}}>I sistemi alla quale ci affaciamo</p>
                    <div id="cardImgServices">
                        <div className="imgService">
                            <img className="itemImgService" src="/src/assets/microsoft.svg" height="70" alt=""/>
                            <p>MICROSOFT</p>
                        </div>
                        <div className="imgService">
                            <img className="itemImgService" src="/src/assets/google-cloud.svg" height="70" alt=""/>
                            <p>GOOGLE CLOUD</p>
                        </div>
                        <div className="imgService">
                            <img className="itemImgService" src="/src/assets/linux.png" height="70" alt=""/>
                            <p>LINUX</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


