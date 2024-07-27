import {useEffect, useState} from 'react'


function cardsAnimate(cards){
    const [scroll, setScroll] = useState(0)
    const [action, setAction] = useState(false)
    cards = cards.current
    useEffect(()=>{
        const cardAnimate = ()=>{
            setScroll(window.scrollY)
            if(scroll > 540){
                if(action==false){
                    for (const card of cards){
                        card.animate([
                            {},
                            {opacity: 1, translate: "0 0 0"}
                            ], {
                                duration: 1000,
                                fill: "forwards"
                            })   
                    }    
                    setAction(true)
                }
            }
        }
        window.addEventListener("scroll", cardAnimate)
        return ()=>{
            window.removeEventListener("scroll", cardAnimate)
        }
    },[scroll])
}

export {cardsAnimate}
