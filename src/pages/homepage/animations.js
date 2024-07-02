export default function AnimationCard(gsap){
    for(const c of document.querySelectorAll(".card")){
      const color = c.getAttribute("color")
      c.style.borderLeft = "5px solid "+color 
      const child = c.children[0].children
      const titleSize = window.getComputedStyle(child[0])
      const font_size = Number(titleSize.fontSize.replace("px", ""))
      
      c.addEventListener("mouseover", ()=>{
        child[1].style.visibility = "hidden"
        gsap.to(c, {
          duration: 0.3,
          backgroundColor: color,
          borderLeft: "20px solid #0f164d"
        })
        gsap.to(child[0], {
          duration: 0.3,
          position: "absolute",
          top: "15%",
          fontSize: (font_size*1.5)+"px"
    
        })
      })
      
      c.addEventListener("mouseout", ()=>{
        child[1].style.visibility = "visible"
        gsap.to(c, {
          duration: 0.3,
          backgroundColor: "#0f164d",
          borderLeft: "5px solid "+color
        })
        gsap.to(child[0], {
          duration: 0.3,
          top: "5%",
          fontSize: font_size+"px"
        })
      })
    }
}
