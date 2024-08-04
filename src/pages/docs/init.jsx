import './docs.css'
import get_testo from './testo.jsx' 
import get_code from './code.jsx' 

export default function Init_docs_API({ApiType}){
    const d = get_testo()[ApiType]
    const c = get_code()[ApiType]

    return (
       <section id="main_docs">
           <div id="divMenuDocs" style={{padding: "100px 0 0 30px"}}>
                <i>{d.titolo}</i>
            </div> 
           <div id="divTestoDocs" style={{padding: "100px 0 0 30px"}}>
                <h1>{d.titolo}</h1>
                <p>Endpoints</p>
                <ul>
                    {d.endpoints.map((e, i)=>(
                        <li key={i} style={{marginLeft: "150px"}}>
                        <p>{e.route} <b className="viewCode">View code</b></p> 
                        {e.keys.map((key, k)=>(
                            <span key={k}>
                                <p><b>{key.name}</b>: {key.description}</p>
                            </span>
                        ))}
                        </li>
                    ))}
                </ul>

            </div> 
           <div id="divCodeDocs" style={{padding: "100px 0 0 30px"}}>
                <div style={{ width: "80%", height: "80%", backgroundColor: "#000", color: "#fff"}}>
                    <div>
                        <div style={{display:"flex", justifyContent: "space-around"}}>
                            {new Array("Python", "Golang", "JS", "Java").map(e=>(
                                <button style={{flex: "1", padding: "10px 0", border:"none"}}>{e}</button>
                            ))}
                        </div>
                        <code style={{whiteSpace: "pre-line"}}>   
                            {c.linguaggio.python.type1}
                        </code>
                    </div>
                </div>
            </div> 
       </section>
    )
}
