import { useState } from "react";
import { Link } from "react-router-dom";

export default function BurgerMenu(){
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="burgerMenu">
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
            <ul className={`links ${showMenu?"":"hidden"}`}>
                <Link className="link" to={"/"}>Accueil</Link>
                <Link className="link" onClick={()=>setShowMenu(prev=>!prev)} to={"formations"}>Formations</Link>
                <Link className="link" onClick={()=>setShowMenu(prev=>!prev)} to={"projets"}>Projets</Link>
                <Link className="link" onClick={()=>setShowMenu(prev=>!prev)} to={"competences"}>Compétences</Link>
            </ul>
        </div>
    );
}