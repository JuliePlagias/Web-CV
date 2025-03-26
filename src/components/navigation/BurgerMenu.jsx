import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function BurgerMenu({showMenu, setShowMenu}){
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showMenu]);

    return (
        <div className={`burgerMenu ${showMenu?"visible":"hidden"}`}>
            <ul className="links">
                <Link className="link" to={"/"}>Accueil</Link>
                <Link className="link" onClick={()=>setShowMenu(prev=>!prev)} to={"formations"}>Formations</Link>
                <Link className="link" onClick={()=>setShowMenu(prev=>!prev)} to={"experiences"}>Expériences</Link>
                <Link className="link" onClick={()=>setShowMenu(prev=>!prev)} to={"competences"}>Compétences</Link>
            </ul>
        </div>
    );
}