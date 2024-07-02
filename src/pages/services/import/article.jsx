export default function Article(){
  return (
    <article>
      <h1 className="titoloArticolo">IMPORT</h1>
      <h1 id="#introduzione" className="sottotitoli">Introduzione</h1>
      <div className="lineaTitolo"></div>
      <p>Il file di configurazione si divide in 4 campi: <b>Login</b>, <b>Work</b>, <b>Response</b>, <b>Dashboard</b>.</p>
     
      <h1 className="sottotitoli">Login</h1>
      <div id="containerLogin">
        {articoliLogin.map((e,i)=>(
          <div className="cardImport" key={i}>
            <p>{e.title}</p>
            <pre>
              <code>{e.json}</code>
            </pre>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
      <h1 className="sottotitoli">Work</h1>
      <div className="cardImport" id="containerWork">
        <pre>
          <code>{jsonWork}</code>
        </pre>
        <div>
          <p id="descrizioneWork"></p>
        </div>
      </div>
    </article>
  )
}

const articoliLogin = [
  {
    title: "IMAP",
    json: `"login":{
    "server": "mail.blabla.com",
    "email": "pippo@blabla.com",
    "password": "####",
    "port": 995
  },
`,
  },
  {
    title: "Gmail",
    json: `"login":{
    "server": "mail.blabla.com",
    "email": "pippo@blabla.com",
    "password": "####",
    "port": 995
  },
`,
  },
  {
    title: "Outlook",
    json: `"login" :{
    "client_id": "client_id",
    "scope": "https://graph.microsoft.com/.default",
    "client_secret': "client_secret",
    "grant_type': "password",
    "username": "email",
    "password": "password"
  },
`,
  },
]

const jsonWork = `"work": {
    "transformation":{
         "options": "options",
          "version": "version",
          "type": "",
          "in": ["estensioni file"]
          "out": ["esetensioni file"]
        }
    },`
