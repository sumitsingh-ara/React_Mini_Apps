import {Link} from "react-router-dom";
export const Navbar = () => {
    const nav =[
        {id:1,title:"Home",to:"/"},
        {id:2,title:"Movie App",to:"/movie"},
        {id:3,title:"Language Translator",to:"/translator"},
        {id:4,title:"Number Game",to:"/numberGame"}
    ]
    return(
        <div style={{margin:"10px",padding:"10px",justifyContent:"center",boxShadow:"10px 10px 100px 10px blue"}}>
    {nav.map((e)=>(
        <Link style={{margin:"10px"}} key={e.id} to={e.to}>{e.title}</Link>
    ))}
        </div>
    )
}