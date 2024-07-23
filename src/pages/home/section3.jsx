import './homepage.css'

export default function Section_tre(){
    return (
        <section id="section3" className="sfondo">
            <div className="overlay"></div>
            <div id="card1Section3">
                <h1 style={{marginBottom: "25px"}}>Contatta i nostri consulenti</h1>
                <p>
                    via Degli Albrici, 4 <br/>
                    6830 Chiasso (CH) <br/>
                    Tel:+41 91 682 93 00 <br/>
                    Mobile:+39 334 58 33 917 <br/>
                </p>
                <div id="divAction">
                    <img src="/src/assets/call.png" alt=""/>
                    <img src="/src/assets/email.png" alt=""/>
                    <img src="/src/assets/maps.png" alt=""/>
                </div>
            </div>
            
            <div id="card2Section3">
                <form>
                    <h1>Scrivici...</h1>
                    <input placeholder="Email" required></input>
                    <input placeholder="Telefono" required></input>
                    <textarea placehoder="Descrizione"></textarea>
                </form>
            </div>
        </section>
    )
}
