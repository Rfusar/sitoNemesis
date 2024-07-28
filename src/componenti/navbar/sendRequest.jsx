import {crea, addSfondo} from '/src/functions.jsx'

export default function sendRequest(){
    const sfondo = addSfondo()
    const card = crea("div", {
        height: "80%",
        width: "70%",
        padding: "30px",
        position: "relative",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        boxShadow: "5px 10px 15px #0008",
        borderRadius: "10px"
    })
    card.animate([
        {opacity: 0, translate: "0 -50px 0"},
        {opacity: 1, translate: "0 0 0 "}
    ], {
        duration: 500,
        fill: "forwards"
    })
    const btnClose = crea("button", {
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "red",
        color: "#fff",
        border: "none",
        padding: "10px",
        cursor: "pointer",
    })
    btnClose.addEventListener("click", ()=>{sfondo.remove()})
    btnClose.textContent = "X"
    const titolo = crea("h1", {
        fontSize: "2rem",
    })
    titolo.textContent = "Scrivici..."

    const btnSend = crea("button", {
        backgroundColor: "green",
        color: "#fff",
        padding: "10px",
        cursor: "pointer",
        border: "none",
    })
    btnSend.textContent = "INVIA"

    const email = crea("input", {
        padding: "10px",
        outline: "none",
        border: "None",
        borderLeft: ".5px solid #000",
        borderBottom: ".5px solid #000"
    })
    email.type = "email"
    email.placeholder = "Email"

    const description = crea("textarea", {
        padding: "10px",
        height: "70%",
        outline: "none",
        border: "none",
        borderLeft: ".5px solid #000",
        borderBottom: ".5px solid #000"
    })
    description.placeholder = "Descrizione"

    //A schermo
    card.append(btnClose, titolo, email, description, btnSend)
    sfondo.append(card)
}
