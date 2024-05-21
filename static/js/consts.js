window.addEventListener("keydown", (event)=>{
 if (event.shiftKey && event.key == "S"){
    window.location.href = "mailto:rfusaro12@gmail.com"
 }
})



function create(elemento, classe, id, style){
  const e = document.createElement(elemento)
  if (classe){
    e.setAttribute("class", classe)
  }
  if(id){
    e.id = id
  }
  if(style){
    Object.assign(e.style, style)
  }
  return e
}



const testo1 = `Soluzioni digitali per i servizi e il commercio`
const testo2 = `Rafforza la tua azienda con una solida presenza online.
Crea moderne applicazioni e siti Web per gestire vendite,
servizi, assistenza e logistica.`
const testo3_cards = [
  {
    title: "Siti Web e applicazioni",
    text: `Velocità, integrazione, affidabilità e coinvolgimento, le nostre semplici regole per sviluppare applicazioni moderne. Nemesis è full-stack service development`
  },
  {
    title: `Automazione processi`,
    text: `Automatizza processi e attività aziendali col supporto di Machine Learning e Intelligenza Artificiale. Sviluppa applicazioni e funzioni adeguate ai tuoi obiettivi.`
  },
  {
    title: `Consulenza per il digitale`,
    text: `Affianchiamo i tuoi manager e dipendenti nel percorso di trasformazione digitale dell'azienda, disegnando processi, servizi e applicazioni a misura d'essere umano.`
  }
]
