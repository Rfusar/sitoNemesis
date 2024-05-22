
let check = 0
let text = null
window.addEventListener("scroll", ()=>{
  const w = window.scrollY
  const DIV = divLeft
  //console.log(w)
  if (w < 100){    
    DIV.innerHTML = ""
    text = create("h1", null, null, {fontSize: "60px", transition: ".5s"})
    text.textContent = testo1
    DIV.append(text)
    text.style.opacity = 1
    DIV.style.width = "50%"
    logo.style.opacity = 1
    nav.style.opacity = 1
    footer.style.opacity = 1
  }
  else if (w >= 100 && w < 120){
    text.style.opacity = 0
  }
  else if (w >= 120 && w < 220){
    DIV.innerHTML = ""
    const divRight = create("section", "divRight")
    text = create("h1", null, null, {fontSize: "60px", transition: ".5s"})
    text.textContent = testo2 
    text.style.opacity = 0
    DIV.append(text)
  }
  else if (w >= 220 && w < 250){
    text.style.opacity= 0
  }
  else if(w >= 250 && w < 350){
    text.style.opacity = 1
    DIV.style.width = "50%"

    logo.style.opacity = 0
    nav.style.opacity = 0
    footer.style.opacity = 0
    
    check = 0
  }

  else if (w >= 350 && w < 450){
     if(check == 0){
        check++
        DIV.style.width = "100%"
        DIV.style.display = "flex"
        DIV.style.flexDirection = "row"
        DIV.innerHTML = ""
        for(const d of testo3_cards){
          const card = create("div")
          card.style.flex = "1"
          const titolo = create("h1")
          titolo.textContent = d["title"]
          const descrizione = create("p")
          descrizione.textContent = d["text"]
          card.append(titolo, descrizione)
          DIV.append(card)
        
        }
     }
  }

})
