import './database.css'
export default function Article(){
  return (
    <article>
        <h1 className="titoloArticolo">Database</h1>
        <div className="lineaTitolo"></div>
        <h1 style={{textAlign: "center"}}><i>MongoDB</i></h1>
        <h1 id="introduzione-mdb">Introduzione</h1>
        <section className="section">
            <p>API per interagire con MongoDB, Key Importanti per la richiesta:</p>
            <ul className="elencoKeyForRequest">
                <li>project_id --> stringa --> Project_name___DB___(Collection(-opzionale))</li>
                <li>elemento --> boolean</li>
                <li>tags --> oggetto -opzionale</li>
                <li>filtri --> oggetto -opzionale</li>
            </ul>
    
            <p><b>project_id</b>: identifica a quale database e quale collection e riferita la query</p>
            <p><b>elemento</b>: se "true" allora si riferisce a un elemento singolo, se "false" no</p>
            <p><b>tags</b>: la "key" identifica il paramentro della collection invece il "value" è il valore da cercare</p>
            <p><b>filtri</b>: la "key" identifica il paramentro della collection invece il valore puo essere 0 per escludere e 1 per includere nella risposta</p>
        </section>
        <h1 id="richiesta-mdb" className="sottotitoli">Richiesta</h1>
        <section className="section">
            <p>per capire meglio puoi andare e vedere: <i>https://www.mongodb.com/docs/manual/tutorial/query-documents/</i></p>
            <p>Endpoint disponibili:</p>
            <ul className="elencoKeyForRequest">
                <li><i>/insert</i> --> inserisci nuovi/o record --> return Esito</li>
                <li><i>/update</i> --> aggiorna i/il record --> Attenzione il campo <b>tags</b> è OBBLIGATORIO --> return Esito</li>
                <li><i>/delete</i> --> elimina i/il record --> Attenzione il campo <b>tags</b> è OBBLIGATORIO --> return Esito</li>
                <li><i>/view</i> --> visualizza i/il record --> return risposta</li>
            </ul>
        </section>
        <pre>
            Esempio in Python
            <code>{codeReq}</code>
        </pre> 
        <h1 id="risposta-mdb" className="sottotitoli">Risposta</h1>
        <p>La richiesta ritorna un esito oppure un JSON</p>
    </article>
  )
}

const codeReq = `
import requests
#Attenzione ci sono delle limitazioni nel creare il json
#Guarda https://docs.teradata.com/r/Enterprise_IntelliFlex_VMware/JSON-Data-Type/JSON-Data-Type/Standards-Compliance

res = requests.post(
    url=URL+"/insert",
    headers={
        "Content-Type": "application/json",
        "Authorization": "bearer {APIKEY}"
    },
    json={
        "project_id": "LCT___001___emls",
        "elemento": True,
        "insert": {
            "Key1": {},
            "Key2": [],
            "Key1": False,
            ...
            "Key_n": "Tutto quello che vuoi"
        }
    }
)
`
