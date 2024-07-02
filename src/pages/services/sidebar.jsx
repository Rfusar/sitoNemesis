export default function Sidebar({itemsSidebar}){
    const handleClick = (e, link) => {
        e.preventDefault();
        const targetElement = document.getElementById(link.substring(1));
        const Article = document.querySelector("article")
        if (targetElement) {
            Article.scrollTo({
                top: targetElement.offsetTop-100,
                behavior: 'smooth'
            });
        }
    };
    return (
        <aside>
            <ul>
                {itemsSidebar.map((e, i)=>(
                <li key={i} className="pointer" onClick={(event) => handleClick(event, e.link)}>
                    <a href={e.link}>{e.text}</a>
                </li> ))}
            </ul>
        </aside>
  )
}
