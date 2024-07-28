export default function sendRequest(){
    const sfondo = document.createElement("div")
    Object.assign(sfondo.style, {
        position: "fixed",     
        top: "0",              
        left: "0",          
        zIndex: "1",
        backgroundColor: "#0005",
        width: "100%",
        height: "100%",
        display: "flex",      
        alignItems: "center",  
        justifyContent: "center"     
    })
    const card = document.createElement("div")
    Object.assign(card.style, {
        height: "80%",
        width: "70%",
        position: "relative",
        backgroundColor: "#fff"
    })
    const btnSend = document.createElement("button")
    Object.assign(btnSend.style, {
        backgroundColor: "green",
        color: "#fff"
    })
    const btnClose = document.createElement("button")
    Object.assign(btnClose.style, {
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "red",
        color: "#fff"
    })
    btnClose.textContent = "X"

    const email = document.createElement("input")
    email.type = "email"

    const description = document.createElement("textarea")
    card.append(btnClose, email, description, btnSend)
    sfondo.append(card)
    document.body.append(sfondo)
}
