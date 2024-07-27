import { useEffect, useState } from 'react';


function useNavbarAnimate(navbarRef){
    const [fixed, setFixed] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;

      if (window.scrollY < 400) {
        if (fixed == "start"){
          navbar.animate([
            {},{ 
              position: "absolute",
              top: 0,
              opacity: 1,
              width: "100%",
              pointerEvents: "auto"
            }
            ], {
              duration: 0,
              fill: "forwards"
            })
          setFixed(false);
        }

      } else if (window.scrollY < 645) {
        if (fixed==true) {
          navbar.animate([
            { opacity: 1 },{ opacity: 0, pointerEvents: "none"}
            ], {
              duration: 200,
              fill: "forwards"
            })
            setFixed("start");
          }
        
      } else if (window.scrollY >= 645) {
        if (fixed==false) {
          navbar.animate([
            { opacity: 0 },{ 
              opacity: 1, 
              position: "fixed",
              top: 0,
              width: "100%"
            }
          ], {
            duration: 300,
            fill: "forwards"
          })
          setFixed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fixed])
}


const tendinaMenu = (nomeProdotto, setContentMenu)=>{
  const menu = document.querySelector("#MenuNavbar")
  setContentMenu(nomeProdotto)

  menu.animate([
    {maxHeight: "0px"},
    {maxHeight: "500px"}
  ], {
    duration: 1000,
    fill: "forwards"
  })
  menu.addEventListener("mouseleave", ()=>{
    menu.animate([
      {},
      {maxHeight: "0px"}
    ], {
      duration: 1000,
      fill: "forwards"
    })
  })
}


export {useNavbarAnimate, tendinaMenu}
