import './automazione_ordini.css'
import {useState, useEffect} from 'react'


export default function Section_due({d}){

    let check = 0
    useEffect(()=>{
        const animationCard = ()=>{
            if (window.scrollY < 400){
                try{
                    for(const child of document.querySelector("#prodotto_section2").children){
                        if (check == 0){
                            child.animate([
                                {opacity: 0, translate: "-50px -30px 0"},
                                {opacity: 1, translate: "0 0 0"},
                            ], {
                                duration: 1000,
                                fill: "forwards"
                            })
                            check++
                        }
                        else if (check == 1){
                            child.animate([
                                {opacity: 0, translate: "50px 30px 0"},
                                {opacity: 1, translate: "0 0 0"},
                            ], {
                                duration: 1000,
                                fill: "forwards"
                            })
                            check++
                        }
                    }
                }
                catch(error){console.log(error)}
            }
            
        }
        window.addEventListener('scroll', animationCard);
        return () => {
            window.removeEventListener('scroll', animationCard);
        };
    }, [])

    return (
        <>
            <section id="prodotto_section2">
                <div style={{ 
                    opacity: 0,
                    display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src="/src/assets/icone/dashboard.png" alt="" width="800" />
                </div>

                <div style={{ 
                    opacity: 0,
                    display: "flex", justifyContent: "center", flexDirection: "column", padding:"20px", alignItems: "center", color: "#000"}}>
                    <h1 style={{marginBottom: "20px", fontSize: "1.4rem"}}>{d.description1}</h1>
                    <p style={{fontSize: "1.2rem"}}>{d.description2}</p>
                </div>
            </section>
            
            <div style={{
                display: "flex", justifyContent: "space-around", marginBottom: "40px", flexDirection: "row", padding:"0 100px", alignItems: "center", color: "#000"}}>
                <div>
                    <h1>Tecnologie</h1>
                    <p>GoLang, GraphQL, Kubernetes, React.</p>
                </div> 
                <div>
                    <img src="/src/assets/linguaggi/golang.svg" alt="" width="100"/>
                </div>
                <div>
                    <img src="/src/assets/tecnologie/graphql.svg" alt="" width="100"/>
                </div>
                <div>
                    <img src="/src/assets/tecnologie/kubernets.svg" alt="" width="100"/>
                </div>
                <div>
                    <img src="/src/assets/linguaggi/react.svg" alt="" width="100"/>
                </div>
            </div>
        </>
    )
}
