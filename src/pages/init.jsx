import Init_homepage from './home/init.jsx'
import Init_web_applicazioni from './web_applicazioni/init.jsx'
import Init_automatizza_processi from './automatizza_processi/init.jsx'

function Homepage(){return <Init_homepage/>}
function Web_applicazioni(){return <Init_web_applicazioni/>}
function Automatizza_processi(){return <Init_automatizza_processi/>}

export {
    Homepage, 
    Web_applicazioni,
    Automatizza_processi
}
