import Navbar from '/src/componenti/navbar/init.jsx'
import Section_uno from './section1.jsx'
import Section_due from './section2.jsx'
import Section_tre from './section3.jsx'
import Section_quattro from './section4.jsx'

import dati_home from './dati.jsx'

export default function Init_homepage(){
    const dati = dati_home()
    return (
        <main>
           <Section_uno dati={dati}/> 
           <Section_due dati={dati}/> 
           <Section_tre dati={dati}/> 
           <Section_quattro dati={dati}/> 
        </main>
    )
}
