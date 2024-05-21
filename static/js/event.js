
let check = 0
window.addEventListener("scroll", ()=>{
  const w = window.scrollY
  let text = null
  const DIV = divLeft
  //console.log(w)
  if (w < 100){    
    DIV.innerHTML = ""
    text = create("h1", null, null, {fontSize: "60px"})
    text.textContent = testo1
    DIV.append(text)
    text.style.opacity = 1
    DIV.style.width = "50%"
    logo.style.opacity = 1
    nav.style.opacity = 1
    footer.style.opacity = 1

  }
  else if (w >= 100 && w < 130){
    text.style.opacity = 0
  }
  else if(w >= 130 && w < 300){
    DIV.innerHTML = ""
    text = create("h1", null, null, {fontSize: "60px"})
    text.textContent = testo2 
    DIV.append(text)
    DIV.style.width = "50%"

    logo.style.opacity = 0
    nav.style.opacity = 0
    footer.style.opacity = 0
    
    check = 0
  }

  else if (w > 300){
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
  else{
    logo.style.opacity = 1
    nav.style.opacity = 1
    footer.style.opacity = 1
  }

})
