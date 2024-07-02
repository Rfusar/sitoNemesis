import Sidebar from '../sidebar.jsx'
import Article from './article.jsx'

import '../services.css'
import './database.css'

export default function Email_init(){
  return (
    <main className="_main">
      <Sidebar itemsSidebar={i_Sidebar} />
      <Article />
    </main>
  )
}

const i_Sidebar = [
    "> Introduzione -MDB", "> Richiesta -MDB", "> Risposta -MDB"
]
