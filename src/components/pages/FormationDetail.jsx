import { useLocation } from "react-router-dom";

export default function FormationsDetails(){
    const location = useLocation();
    const data = require("../../assets/formationsDetails.json");
    const formationName = Object.keys(data).find((key)=>location.pathname.endsWith(key)); 

    return (
        <div className="formation-details">
            <h2>{ data[formationName].name}</h2>
            <h3>{ data[formationName].place}</h3>
            <h3>{ data[formationName].date}</h3>
            <p>{ data[formationName].introduction}</p>
            <h3>Compétences</h3>
            <ul>
                {Object.values(data[formationName].skills).map((skill, index) => (
                <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}