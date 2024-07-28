import {crea, addSfondo} from '/src/functions.jsx'

export default async function Cookie(e){
    
    const CookiePolicy = "https://www.iubenda.com/privacy-policy/59936397/cookie-policy"
    const PrivacyPolicy = "https://www.iubenda.com/privacy-policy/59936397"
    
    const link = e.target.textContent == "Cookie Policy" ? CookiePolicy : PrivacyPolicy
   
    const sfondo = addSfondo()
    const btnClose = crea("button", {
        position: "absolute",
        borderRadius: "30%",
        top: "-10px",
        right: "-10px",
        padding: "15px",
        backgroundColor: "red",
        color: "#fff",
        border: "none",
        outline: "none",
        cursor: "pointer",
    })
    btnClose.textContent = "X"
    btnClose.addEventListener("click", ()=>{sfondo.remove()})
    const card = crea("div", {
        height: "70%",
        width: "50%",
        backgroundColor: "#fff",
        position: "relative",
    })
    const iframe = crea("iframe", {
        height: "100%",
        width: "100%",
    })

    iframe.src=link
    card.append(btnClose, iframe)
    sfondo.append(card)
}
