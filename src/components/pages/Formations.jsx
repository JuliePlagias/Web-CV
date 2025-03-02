import Block from "../Block";
import { Outlet } from "react-router-dom";

export default function Formations({isMobile}){
    const data  = require("../../assets/formations.json");

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