import './homepage.css'
import {Link} from 'react-router-dom'

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
                    <Link><img src="/src/assets/call.png" alt=""/></Link>
                    <Link><img src="/src/assets/email.png" alt=""/></Link>
                    <a target="_blank" href='https://www.google.com/maps/place/Nemesis+Solutions+AG/@45.8332289,9.0310201,15z/data=!4m6!3m5!1s0x47869dbb1bcbf90b:0xdc2b3cb7140a0bf3!8m2!3d45.8342251!4d9.0342018!16s%2Fg%2F11gpjlbtd4?entry=ttu'><img src="/src/assets/maps.png" alt=""/></a>
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
