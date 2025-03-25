import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(){
    return (
        <div>
          <Navbar /> 
          <Outlet /> {/* Affiche la page demandée (Informations, Projets, etc.) */}
          <Footer/>
        </div>
      );
}