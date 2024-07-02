export default function Sidebar({itemsSidebar}){
  return (
    <aside>
      <ul>
        {itemsSidebar.map((e, i)=>(
            <li key={i} className="pointer">{e}</li>
        ))}
      </ul>
    </aside>
  )
}
