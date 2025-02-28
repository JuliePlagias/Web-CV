import { Link } from "react-router-dom";

export default function BurgerMenu(){
    return (
        <div className="burgerMenu">
            <Link className="link" to={"/"}>Accueil</Link>
            <Link className="link" to={"formations"}>Formations</Link>
            <Link className="link" to={"projets"}>Projets</Link>
            <Link className="link" to={"competences"}>Compétences</Link>
        </div>
    );
}