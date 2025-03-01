import { useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

export default function Navbar(){
    const location = useLocation();

    const pageTitles = {
        "/formations": "Formations",
        "/projets": "Mes Projets",
        "/competences": "Compétences",
      };

      const currentTitle = Object.keys(pageTitles).find((key)=>location.pathname.startsWith(key));
    
    return (
        <header className="navbar">
            <h1>{pageTitles[currentTitle]}</h1>
            <BurgerMenu/>
        </header>
    );
}