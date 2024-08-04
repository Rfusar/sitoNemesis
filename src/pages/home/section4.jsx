import './homepage.css'
import {Link} from 'react-router-dom'

export default function Section_quattro(){
    return (
        <section id="section4" className="sfondo">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11119.611061590944!2d9.0310201!3d45.8332289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47869dbb1bcbf90b%3A0xdc2b3cb7140a0bf3!2sNemesis%20Solutions%20AG!5e0!3m2!1sit!2sit!4v1722196088326!5m2!1sit!2sit" id="google-maps" referrerPolicy="no-referrer-when-downgrade"></iframe>        
            <div id="cardSection4">
               <span>I nostri canali social</span>
               <img src="/src/assets/social/facebook.png" height="50" alt="" /> 
               <img src="/src/assets/social/infoJobs.png" height="80" alt="" /> 
               <img src="/src/assets/social/linkedin-logo.png" height="50" alt="" /> 
            </div>

        </section>
    )
}
