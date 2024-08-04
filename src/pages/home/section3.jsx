import './homepage.css'

export default function Section_tre({dati}){
    //*inversione TestoImg && ImgTesto
    const alternato = (c, i)=>{
       return i%2==0 ? ( 
                <div key={i} className="itemCardService2">
                     <div className="descriptionService2">
                        <h1>{c.titolo}</h1>
                        <p>{c.description}</p>
                    </div>
                    <img src={`/src/assets/icone/${c.img}`} height="200" alt=""/>
                </div>
       ) 
       :
       (
            <div key={i} className="itemCardService2">
                <img src={`/src/assets/icone/${c.img}`} height="200" alt=""/>
                <div className="descriptionService2">
                    <h1>{c.titolo}</h1>
                    <p>{c.description}</p>
                </div>
            </div>
        )
    }

    return (
        <section id="section3">
            <h1 className="titoloSezione">Soluzioni per l'automazione intelligente</h1>

            <div id="cardServices2">
                {dati._cards.map((c, i)=>alternato(c, i))}
            </div>

            <div id="cardTecnologie">
            {dati._tecnologie.map((t, i)=>(
                <img key={i} src={`/src/assets/tecnologie/${t}`} alt="" height="70"/>
            ))}
            </div>
            
        </section>
    )
}
