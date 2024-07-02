import Sidebar from '../sidebar.jsx'
import Article from './article.jsx'

import '../services.css'

export default function Email_init(){
  return (
    <main className="_main">
      <Sidebar itemsSidebar={i_Sidebar} />
      <Article />
    </main>
  )
}

const i_Sidebar = [
    {
        "link": "#introduzione",
        "text": "Introduzione"
    },
    {
        "link": "#richiesta",
        "text": "Richiesta"
    }, 
    {
        "link": "#risposta",
        "text": "Risposta"
    }
]

