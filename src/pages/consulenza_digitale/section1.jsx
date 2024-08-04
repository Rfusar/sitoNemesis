import './consulenza_digitale.css'

export default function Section_uno({dati}){
    return (
        <section id="cd_section1" className="sfondo">
            <div>
                <h1 className="titoloPagina">{dati.titolo}</h1>
            </div>
            <div></div>
        </section>
    )
}
