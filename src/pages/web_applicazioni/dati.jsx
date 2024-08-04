const linguaggi = [
    "Python.png", "Java.png", "Golang.svg", "Nodejs.svg", "React.svg"
]

export default function dati_page(){
    return {
        titolo: "Applicazioni Web, Search Engine Marketing, Analytics",
        get_linguaggi: linguaggi.map(l => ({
            title: l.split(".")[0].toLocaleUpperCase(),
            img: l.toLocaleLowerCase()
        })),
        _titolo: "Applicazioni mobile e desktop",
        _linguaggi: [
            {
                h1: "Integrazione sistemi",
                p: "Integra facilmente soluzioni AI di terze parti e strumenti ML open source come Tensorflow.js nei tuoi sistemi digitali",
                img: "html.svg"
            },
            {
                h1: "Reti e infrastruttura",
                p: "Trasforma il modo in cui le persone collaborano all'interno delle aziende e con clienti e partner. Consenti ai dipendenti di lavorare in tutta sicurezza ovunque e su qualsiasi dispositivo",
                img: "javascript.svg"
            },
            {
                h1: "Analisi dati",
                p: "Estrai informazioni dai dati con una suite completa di strumenti di analisi e di machine learning",
                img: "css.svg"
            },
        ]
    }
}

