import './footer.css'
import Cookie from './cookie.jsx'

export default function Footer(){
    return (
        <footer id="footer">
            <span>Copyright © 2021 Nemesis Solutions AG</span>
            <span>P.IVA CHE-250.129.306</span>
            <div>
                <span onClick={Cookie}>Privacy Policy</span>
                <span onClick={Cookie}>Cookie Policy</span>
            </div>
        </footer>
    )
}
