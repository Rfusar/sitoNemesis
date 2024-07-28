function crea(a, b){
    const element = document.createElement(a)
    if (b != null){Object.assign(element.style, b)}
    return element
}
function addSfondo(){
    const sfondo = crea("div", {
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
    document.body.append(sfondo)
    return sfondo
}

export {crea, addSfondo}
