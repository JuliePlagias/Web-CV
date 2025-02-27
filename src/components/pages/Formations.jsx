import { useEffect, useState } from "react";
import Block from "../Block";
import { Outlet } from "react-router-dom";

export default function Formations(){
    const [isMobile, setIsMobile] =useState(false);

    useEffect(()=>{
        const checkIfMobile=()=>setIsMobile(window.matchMedia("(max-width:1280px").matches);
        checkIfMobile();
        window.addEventListener("resize",checkIfMobile);
        return ()=>window.removeEventListener("resize", checkIfMobile);
    },[]);

    return (
        <div className="formations">
            <Block image={"Web"} name={"Dev-Front"} link={"dev_front"}
             details={"Module de formation de 6 semaines, visant à améliorer les compétences front-end."} isMobile={isMobile}/>
            <Block image={"Gaming"} name={"Programmation gameplay"} link={"objectif_3d"}
             details={"Formation diplomante d'une durée de 3 ans. Visant à apprendre la programmation orientée jeux vidéo sous logiciel comme Unreal ou Unity"} isMobile={isMobile}/>
             <Outlet />
        </div>
    );
}