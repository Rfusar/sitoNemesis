import {Link} from 'react-router-dom'
import './navbar.css'

function Soluzioni({routes, docs}){
    return (
        <section>
        {routes.map((e,i)=>(
            <div key={i} className={`itemMenu ${i==routes.length-1 ? '': 'borderRight'}`}>
                {e.map((link, j)=>(
                    <span key={j}>
                        <Link className="link" to={`/prodotti/${link.route}`}>{link.nav}</Link> 
                        {docs === true && (
                                <Link className="link" style={{ color: "red" }} to={`/docs/${link.route}`}> Docs</Link>
                            )}
                    </span>
                ))}
            </div>
        ))}
        </section>
    )
}

export default function Prodotti({name, prodotti, API}){
    const contentMenus = "Prodotti" == name ? prodotti: API
    if(contentMenus==undefined)return
    
    const itemsMenuNavbar = [], column = [], ultimaPagina = []
    const rows = 3 
    const n_ogg = contentMenus.length
    const max_colonne = parseInt(n_ogg/rows)

    for(let i = 0; i < n_ogg; i++){
        const _set = {
            name: contentMenus[i]["product"],
            route: ((name) => name.replace(/ /g, "_").toLocaleLowerCase())(contentMenus[i]["product"]),
            nav: contentMenus[i]["nav"]
        }
        if (column.length < rows){
            column.push(_set) 
            if(n_ogg < rows || i>=n_ogg-rows){
                ultimaPagina.push(_set)
                if(i==n_ogg-1){
                    itemsMenuNavbar.push(ultimaPagina.slice())
                    ultimaPagina.length=0
                }
            }
        }
        else{
            i--
            itemsMenuNavbar.push(column.slice())
            column.length = 0
        }
    }

    switch(name){
        case "Prodotti": return <Soluzioni routes={itemsMenuNavbar} docs={false}/>
        case "API": return <Soluzioni routes={itemsMenuNavbar} docs={true}/>
    }
}
