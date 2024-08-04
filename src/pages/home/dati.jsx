const sistemi = [
    "microsoft.svg", "cloud.svg", "linux.png"
]

export default function dati_home(){
    return {
        //*Section1
        titolo: "Soluzioni digitali per i servizi e il commercio",
        sottoTitolo: "\"Rafforza la tua azienda con una solida presenza online. Crea moderne applicazioni e siti Web per gestire vendite, servizi, assistenza e logistica\"",

        //*Section2
        sistemi: sistemi.map(s=>{
            return {
                name: ((name)=>name.split(".")[0].toLocaleUpperCase())(s),
                img: s,
            }
        }),
        description1: `Nemesis affianca la tua azienda nello sviluppo di strumenti digitali in grado di sfruttare pienamente il potenziale 
                        del World Wide Web e dei moderni sistemi informatici.
                        Gestisci in maniera più profittevelo e agile la tua attività, crea un ambiente di lavoro performante e 
                        coinvolgente per collaboratori e dipendenti.
                        Offri ai tuoi clienti un accesso rapido a opzioni d'acquisto, assistenza, funzioni logistiche e amministrative`,
        cards: [
            {
                img:"icon_consulenza_cardHome.svg",
                link: "/consulenza_digitale",
                titolo: "Consulenza per il digitale",
                description: "Affianchiamo i tuoi manager e dipendenti nel percorso di trasformazione digitale dell'azienda, disegnando processi, servizi e applicazioni a misura d'essere umano"
            },
            {
                img:"icon_web_applicazioni_cardHome.svg",
                link: "/web_applicazioni",
                titolo: "Siti Web e applicazioni",
                description: "Velocità, integrazione, affidabilità e coinvolgimento, le nostre semplici regole per sviluppare applicazioni moderne. Nemesis è full-stack service development"
            },
        ],

        //*Section3
        _titolo: "Soluzioni per l'automazione intelligente",
        _tecnologie: [
            "docker.svg", "kubernets.svg", "graphql.svg" , "tensorflow.svg"
        ],
        _cards: [
            {
                img:"api.svg",
                titolo: "Integrazione sistemi",
                description: "Integra facilmente soluzioni AI di terze parti e strumenti ML open source come Tensorflow.js nei tuoi sistemi digitali"
            },
            {
                img:"server.svg",
                titolo: "Reti e infrastruttura",
                description: "Trasforma il modo in cui le persone collaborano all'interno delle aziende e con clienti e partner. Consenti ai dipendenti di lavorare in tutta sicurezza ovunque e su qualsiasi dispositivo"
            },
            {
                img:"filter.svg",
                titolo: "Analisi dati",
                description: "Estrai informazioni dai dati con una suite completa di strumenti di analisi e di machine learning"
            },
        ],

        //Section4
        social: [
            {
                link: "",
                img: "facebook.png"
            },
            {
                link: "",
                img: "infoJobs.png"
            },
            {
                link: "",
                img: "linkedin.png"
            }

        ]


    }
}
