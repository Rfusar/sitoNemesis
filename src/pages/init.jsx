import Init_homepage from './home/init.jsx'
import Init_web_applicazioni from './web_applicazioni/init.jsx'
import Init_consulenza_digitale from './consulenza_digitale/init.jsx'

//Prodotti
import Init_prodotti from './prodotti/init.jsx'
import Init_docs_API from './docs/init.jsx'

function Homepage(){return <Init_homepage/>}
function Web_applicazioni(){return <Init_web_applicazioni/>}
function Consulenza_digitale(){return <Init_consulenza_digitale/>}
function Prodotti({dati}){return <Init_prodotti dati={dati}/>}
function Docs_API({ApiType}){return <Init_docs_API ApiType={ApiType}/>}

export {
    Homepage, 
    Web_applicazioni,
    Consulenza_digitale,
    Prodotti,
    Docs_API,
}
