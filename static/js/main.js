const nav = create("nav", "navbar")

const logo = create("img", null, "logoSection1")
logo.src = "https://www.nemesisag.com/images/nemesis-solution-white.svg"

const e = create("p", "itemNavbar", null, {marginLeft: "60px"})
e.innerHTML = `Premi 
<img src='static/img/shift.png' style="width: 40px; height: 40px"/> + 
<img src='static/img/s.png' style="width: 40px; height: 40px"/> 
per contattarci`
nav.append(e)


const divLeft = create("section", "divPrincipale")
const titleFirstSection = create("h1", null, null, {
  fontSize: "60px",
  transition: ".5s"
})

titleFirstSection.textContent= "Soluzioni digitali per i servizi e il commercio"
divLeft.append(titleFirstSection)



const footer = create("footer", "footer")
const footer_p = create("p")
footer_p.style.marginRight = "40px"
footer_p.innerHTML = `
<img src="static/img/fb.png" style="width: 30px"/> nemesisagsolutions
<img src="static/img/linkedin.png" style="width: 30px"/> nemesisagsolutions
`
footer.append(footer_p)

for(const e of new Array(nav, footer, logo, divLeft, divRight)){
  document.querySelector(".vignette-radial").append(e)
}
