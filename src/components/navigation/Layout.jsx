import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout(){
    return (
        <div>
          <Navbar /> 
          <Outlet /> {/* Affiche la page demandée (Informations, Projets, etc.) */}
        </div>
      );
}