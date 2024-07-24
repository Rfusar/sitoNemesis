import './homepage.css'

export default function Section_quattro(){
    return (
        <section id="section4" className="sfondo">
            <div className="overlay"></div>
            <div id="card1Section4">
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
            
            <div id="card2Section4">
                <form>
                    <h1 style={{textAlign: "right"}}>Scrivici...</h1>
                    <label>Email</label>
                    <input required></input>
                    <label>Telefono (Facoltativo)</label>
                    <input></input>
                    <label>Dacci un idea per aiutarti</label>
                    <textarea></textarea>
                    <button className="pointer" id="btn_inviaRichiesta">INVIA</button>
                </form>
            </div>
        </section>
    )
}
