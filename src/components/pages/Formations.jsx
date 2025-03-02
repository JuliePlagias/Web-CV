import { useEffect, useState } from "react";
import Block from "../Block";
import { Outlet } from "react-router-dom";

export default function Formations(){
    const [isMobile, setIsMobile] =useState(false);
    const data  = require("../../assets/formations.json");

    useEffect(()=>{
        const checkIfMobile=()=>setIsMobile(window.matchMedia("(max-width:1280px").matches);
        checkIfMobile();
        window.addEventListener("resize",checkIfMobile);
        return ()=>window.removeEventListener("resize", checkIfMobile);
    },[]);

    return (
        <div className="formations">
            {
                data.map((formation, index)=> (
                    <Block key={index} image={formation["background-img"]} name={formation.name} link={formation.link}
                    details={formation.intro} isMobile={isMobile}/>))
            }
            <Outlet/>
        </div>
    );
}