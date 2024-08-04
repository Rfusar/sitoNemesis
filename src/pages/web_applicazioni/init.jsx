import Section_uno from './section1.jsx'
import Section_due from './section2.jsx'
import Section_tre from './section3.jsx'
import './web_applicazioni.css'
import dati_page from './dati.jsx'

export default function Init_web_applicazioni(){

    const d = dati_page()

    return (
        <section>
            <Section_uno titolo={d.titolo}/>
            <Section_due dati={d} />
            <Section_tre/>
        </section>
    )
}
