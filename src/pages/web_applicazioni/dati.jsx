const linguaggi = [
    "Python.png", "Java.png", "Golang.svg", "Nodejs.svg", "React.svg"
]


export default function dati_page(){
    return {
        //Section1
        titolo: "Applicazioni Web, Search Engine Marketing, Analytics",
        get_linguaggi: linguaggi.map(l => ({
            title: l.split(".")[0].toLocaleUpperCase(),
            img: l.toLocaleLowerCase()
        })),

        //Section2
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
        ],

        //Section3
        vantaggi: [
            {
                img: "network.svg",
                h1: "Siti Web",
                p: "Siti Web responsive, statici o dinamici. Moderne tecnologie, rispetto degli standard W3C e GDPR. Massima competenza e esperienza con Joomla! e Wordpress",
            },
            {
                img: "applicazione.svg",
                h1: "Applicazioni",
                p: "Applicazioni che sfruttano tutta la potenza del Web: veloci, rapide e coinvolgenti anche in condizioni di rete incerte. Rispondi alle interazioni senza ritardi e coinvolgi con notifiche push",
            },
            {
                img: "marketing.svg",
                h1: "Marketing Digitale ",
                p: "Progetti SEO e SEM. Campagne pubblicitarie (PPC e Display), data marketing, social media marketing, marketing diretto via e-mail, SMS e MMS",
            },
            {
                img: "manutenzione.svg",
                h1: "Manutenzione ",
                p: "Preserva gli investimenti con piani di manutenzione ad hoc. Permetti alle tue applicazioni e sistemi digitali di evolvere nel rispetto degli standard di accessibilità, sicurezza e usabilità",
            },
        ],

        //Section4
        frase_impatto: "Ai nostri clienti offriamo un ambiente di lavoro altamente professionalizzato e agile, che si avvale di servizi e tecnologie moderne per la collaborazione e la produttività",
        cards: [
            {
                img: "cloud.svg",
                titolo: "Google Cloud",
                description: "Suite di servizi di cloud computing che utilizza l'infrastruttura di base, l'analisi dei dati e la tecnologia di machine learning di Google. Sicuro e dotato di ogni funzionalità per tutte le aziende"
            },
            {
                img: "semrush.svg",
                titolo: "SEMrush ",
                description: "Potente suite di marketing digitale con moderne funzionalità di analisi SEO, PPC, Display, ricerca di parole chiave, competitors, social media, PR, contenuti e molto altro"
            },
            {
                img: "github.svg",
                titolo: "GitHub ",
                description: "Servizio di gestione di progetti software per lo sviluppo collaborativo, che offre strumenti di controllo versione, gestione Bug e problemi"
            },
        ],
        google_cards: [
            {
                img: "ads.svg",
                titolo: "Google ADS",
            },
            {
                img: "analytics.svg",
                titolo: "Google ANALYTICS",
            },
            {
                img: "data-studio.svg",
                titolo: "Google DATA STUDIO",
            },
            {
                img: "drive.svg",
                titolo: "Google DRIVE",
            },
            {
                img: "mybusiness.svg",
                titolo: "Google MY BUSINESS",
            },
            {
                img: "analytics.svg",
                titolo: "Google ANALYTICS",
            },
            {
                img: "optomize.svg",
                titolo: "Google OPTOMIZE",
            },
            {
                img: "search-console.svg",
                titolo: "Google SEARCH CONSOLE",
            },
            {
                img: "tag-manager.svg",
                titolo: "Google TAG MENAGER",
            },
        ]

    }
}

