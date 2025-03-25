import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

export default function Navbar(){
    const location = useLocation();
    
    return (
        <header className="navbar">
            <h1>
                {location.pathname.startsWith("/formations") && "Formations"}
                {location.pathname.startsWith("/experiences") && "Mes expériences"}
                {location.pathname.startsWith("/competences") && "Compétences"}
            </h1>
            <BurgerMenu/>
            <ul>
                <Link className="link" to={"/"}>Accueil</Link>
                <Link className={`link ${location.pathname.startsWith("/formations") ? "active" : ""}`} to={"formations"}>Formations</Link>
                <Link className={`link ${location.pathname.startsWith("/experiences") ? "active" : ""}`} to={"experiences"}>Expériences</Link>
                <Link className={`link ${location.pathname.startsWith("/competences") ? "active" : ""}`} to={"competences"}>Compétences</Link>
            </ul>
        </header>
    );
}