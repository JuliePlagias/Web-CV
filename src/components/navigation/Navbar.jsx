import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import {useState } from "react";

export default function Navbar(){
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    return (
        <header className="navbar">
            <svg onClick={()=>setShowMenu(!showMenu)}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/* <!-- Ligne du haut --> */}
                <g id="top-line">
                    <path d="M0 96C0 78.3 14.3 64 32 64h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96z"/>
                </g>

                {/* <!-- Ligne du milieu --> */}
                <g id="middle-line">
                    <path d="M0 256c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"/>
                </g>

                {/* <!-- Ligne du bas --> */}
                <g id="bottom-line">
                    <path d="M448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/>
                </g>
            </svg>
            <h1>
                {location.pathname.startsWith("/formations") && "Formations"}
                {location.pathname.startsWith("/experiences") && "Mes expériences"}
                {location.pathname.startsWith("/competences") && "Compétences"}
            </h1>
            <BurgerMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
            <ul>
                <Link className="link" to={"/"}>Accueil</Link>
                <Link className={`link ${location.pathname.startsWith("/formations") ? "active" : ""}`} to={"formations"}>Formations</Link>
                <Link className={`link ${location.pathname.startsWith("/experiences") ? "active" : ""}`} to={"experiences"}>Expériences</Link>
                <Link className={`link ${location.pathname.startsWith("/competences") ? "active" : ""}`} to={"competences"}>Compétences</Link>
            </ul>
        </header>
    );
}