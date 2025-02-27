import { useEffect, useState } from "react";
import Block from "../Block";

export default function Informations(){
    const [isMobile, setIsMobile] =useState(false);

    useEffect(()=>{
        const checkIfMobile=()=>setIsMobile(window.matchMedia("(max-width:1280px").matches);
        checkIfMobile();
        window.addEventListener("resize",checkIfMobile);
        return ()=>window.removeEventListener("resize", checkIfMobile);
    },[]);

    return (
        <div className="informations">
            <Block image={"Web"} name={"Dev-Front"}
             details={"Module de formation de 6 semaines, visant à améliorer les compétences front-end."} isMobile={isMobile}/>
            <Block image={"Gaming"} name={"Programmation gameplay"}
             details={"Formation diplomante d'une durée de 3 ans. Visant à apprendre la programmation orientée jeux vidéo sous logiciel comme Unreal ou Unity"} isMobile={isMobile}/>
        </div>
    );
}