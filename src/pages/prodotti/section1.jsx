import './automazione_ordini.css'

export default function Section_uno({d}){
    return (
        <section style={{backgroundImage: `url("/${d.img}")`}} className="sfondo sfondoProdotto">
            <div id="prodotto_section1Container1">
                <h1 className="titoloPagina">{d.title}</h1>
            </div> 
            <div></div>
        </section>
    )
}
