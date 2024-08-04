import {Link} from 'react-router-dom'
import './navbar.css'

function Soluzioni({routes}){
    console.log(routes)
    return (
        <section>
        {routes.map((e,i)=>(
            <div key={i} className={`itemMenu ${i==routes.length-1 ? '': 'borderRight'}`}>
                {e.map((link, j)=>(
                    <Link key={j} to={`/prodotti/${link.route}`}>{link.nav}</Link>
                ))}
            </div>
        ))}
        </section>
    )
}

export default function Prodotti({name, prodotti, API}){
    const contentMenus = "Prodotti" == name ? prodotti: API
    if(contentMenus==undefined)return
    
    const itemsMenuNavbar = [], column = []
    const rows = 3 
    const n_ogg = contentMenus.length
    const max_colonne = parseInt(n_ogg/rows)
    let ultimaPagina = n_ogg%rows == 0 ? false : true
    for(let i = 0; i < n_ogg; i++){
        const _set = {
            name: contentMenus[i]["product"],
            route: ((name) => name.replace(/ /g, "_").toLocaleLowerCase())(contentMenus[i]["product"]),
            nav: contentMenus[i]["nav"]
        }
        console.log(max_colonne+1)
        if (column.length < rows){
            column.push(_set) 
            if(n_ogg < rows || ultimaPagina==true){
                if(ultimaPagina==true){
                    if(i == n_ogg-1){
                        itemsMenuNavbar.push(column.slice())
                    }
                }
                else{itemsMenuNavbar.push(_set)}
            }
        }
        else{
            i--
            itemsMenuNavbar.push(column.slice())
            column.length = 0
        }
    }

    switch(name){
        case "Prodotti": return <Soluzioni routes={itemsMenuNavbar}/>
        case "API": return <Soluzioni routes={itemsMenuNavbar}/>
    }
}
