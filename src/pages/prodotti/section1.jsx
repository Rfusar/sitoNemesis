import './automazione_ordini.css'
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';


export default function Section_uno({d}){
    
    return (
        <>
            <section style={{backgroundImage: `url("/${d.img}")`}} className="sfondo sfondoProdotto">
                <div id="prodotto_section1Container1">
                    <h1 className="titoloPagina">{d.title}</h1>
                </div> 
                <div></div>
            </section>

            <div id="animationCard">
                {d.introduzione_card }
            </div>
        </>
    )
}
