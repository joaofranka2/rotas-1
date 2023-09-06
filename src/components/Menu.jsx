import { Link } from "react-router-dom";

export default function Menu(){

    return(
        <nav className="menu">
            <Link to='/'>Home</Link>
            <samp> </samp>
            <Link to='/produtos'>Produtos</Link>
        </nav>
    )
}