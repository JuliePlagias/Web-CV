import {useState } from "react";
import Button from "./Button";

export default function Block({image, name, details, isMobile, link}){
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`block ${isMobile && isActive ? "active" : ""}`}
        onClick={isMobile ? ()=> setIsActive(!isActive) : undefined}>
            <img src={`/assets/images/${image}.jpg`}></img>
            <div className="details">
                <h2>{name}</h2>
                <p className="hidden">{details}</p>
                <Button text={"Voir plus"} to={link} className={"hidden"}/>
            </div>
        </div>
    );
}