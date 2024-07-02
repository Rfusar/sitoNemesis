export default function Article(){
  return (
    <article>
        <h1 className="titoloArticolo">Email</h1>
        <div className="lineaTitolo"></div>
        <h1 id="introduzione">Introduzione</h1>
        <section className="section">
            <p>API per inviare email, Key Importanti per la richiesta:</p>
            <ul className="elencoKeyForRequest">
                <li>ente --> stringa</li>
                <li>from --> stringa</li>
                <li>to --> stringa || array</li>
                <li>subject --> stringa</li>
                <li>body --> oggetto</li>
            </ul>
            <p><b>ente</b>: decidi con quale dominio inviare l'email</p>
            <p><b>from</b>: decidi con quale email inviare l'email --> NB: l'email deve essere legato al dominio</p>
            <p><b>to</b>: decidi a chi inviare l'email</p>
            <p><b>subject</b>: oggetto email</p>
            <p><b>body</b>: puo avere due valori la key dell'oggetto:</p>
            <ul style={{margin: "5px 0 0 30px"}}>
                <li>text --> l'email sarà composta da testo</li>
                <li>html --> l'email sarà composta da html</li>
            </ul>
        </section>
        <h1 id="richiesta" className="sottotitoli">Richiesta</h1>
        <section className="section">
            <p>Endpoint /email</p>
        </section>
        <pre>
            Esempio in Python
            <code>{codeReq}</code>            
        </pre> 
        <h1 id="risposta" className="sottotitoli">Risposta</h1>
        <p>La richiesta ritorna un esito</p>
    </article>
  )
}

const codeReq = `
import requests

with open("file.html", "r", encoding="utf-8") as f: 
    fileHTML = f.read()

res = requests.post(
    url=URL,
    headers={
        "Content-Type": "application/json",
        "Authorization": "bearer {APIKEY}",
    },
    json={
        "ente": "Nemesis",
        "from": email1,
        "to": ["to1", "to2", "to3"],
        "subject": "Oggetto importante",
        "body": {
            "html": fileHTML
        }
    }
)
`
