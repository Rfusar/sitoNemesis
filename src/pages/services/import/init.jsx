import Sidebar from '../sidebar.jsx'
import Article from './article.jsx'

import '../services.css'
import './import.css'


export default function Import_init(){
  return (
    <main className="_main">
      <Sidebar itemsSidebar={i_Sidebar}/>
      <Article />
    </main>
  )
}

const i_Sidebar = [
    "> Introduzione", "> Richiesta", "> Risposta"
]
