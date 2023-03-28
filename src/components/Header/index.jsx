import { Link } from "react-router-dom";
import "../Header/header.css"

function Header(){
    return(
        <header className="header">
            <Link className="link" to="/">Prime  Flix</Link>
            <Link className="link" to="/filmes/:id">Meus Filmes</Link>
        </header>
    )
}

export default Header