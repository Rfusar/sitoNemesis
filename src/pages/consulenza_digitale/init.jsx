import Section_uno from './section1.jsx'
import Section_due from './section2.jsx'
import get_testo from './dati.jsx'

export default function Init_consulenza_digitale(){
    const d = get_testo()

    return (
        <section>
            <Section_uno dati={d}/>
            <Section_due dati={d}/>
        </section>
    )
}
