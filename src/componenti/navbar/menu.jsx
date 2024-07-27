import {Link} from 'react-router-dom'
import './navbar.css'

function Soluzioni(){
    return (
        <section>
            <div className='itemMenu borderRight'>
                <Link>AUTOMAZIONI ORDINI</Link>
                <Link>GATEWAY SMS E SOCIAL</Link>
                <Link>GESTIONE DOCUMENTALE NPL</Link>
            </div>
            <div className='itemMenu borderRight'>
                <Link>GESTIONE DOCUMENTALE FINANZIAMENTI</Link>
                <Link>GESTIONE ASSENZE (con IVR)</Link>
                <Link>GESTIONE MAGAZZINO (Repository GDPR)</Link>
            </div>
            <div className='itemMenu borderRight'>
                <Link>AUTOMAZIONI DOCUMENTI LOGISTICA</Link>
                <Link>SCANSIONE BARCODE</Link>
                <Link>PRICE SCANNER</Link>
            </div>
            <div className='itemMenu'>
                <Link>SEGNALATORE DI ILLECITI</Link>
            </div>
        </section>
    )
}
function Api(){
    return (
        <section>
            <div className='itemMenu'>
                <Link>PDF</Link>
                <Link>SMS</Link>
                <Link>FAX</Link>
            </div>
        </section>
    )
}

export default function Prodotti({prodotto}){
    switch(prodotto){
        case "Prodotti": return <Soluzioni />
        case "API": return <Api />
    }
}
