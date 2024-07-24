import Navbar from '/src/componenti/navbar/init.jsx'
import Section_uno from './section1.jsx'
import Section_due from './section2.jsx'
import Section_tre from './section3.jsx'
import Section_quattro from './section4.jsx'


export default function Init_homepage(){
    return (
        <main>
           <Section_uno/> 
           <Section_due/> 
           <Section_tre/> 
           <Section_quattro/> 
        </main>
    )
}
