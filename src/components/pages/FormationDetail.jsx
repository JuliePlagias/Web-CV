import { useLocation } from "react-router-dom";

export default function FormationsDetails(){
    const location = useLocation();
    const data = require("../../assets/formations.json");
    const pathName = location.pathname.split("/").pop();
    const formation = data.find((obj)=>obj.link === pathName); 
    return (
        <div className="formation-details">
            <h2>{ formation.name}</h2>
            <h3>{formation.place}</h3>
            <h3>{ formation.date}</h3>
            <p>{ formation.detail}</p>
            <h3>Compétences</h3>
            <ul>
                {Object.values(formation.skills).map((skill, index) => (
                <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}