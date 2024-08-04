import Section_uno from './section1.jsx'
import Section_due from './section2.jsx'
import Section_tre from './section3.jsx'

export default function Init_prodotti({dati}){

    return (
        <section>
            <Section_uno d={dati}/>
            <Section_due d={dati}/>
            <Section_tre d={dati}/>
        </section>
    )
}
