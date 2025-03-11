import { useLocation } from "react-router-dom";

export default function ExperienceDetail(){
    const location = useLocation();
    const data = require("../../assets/experiences.json");
    const pathName = location.pathname.split("/").pop();
    const experience = data.find((obj)=>obj.link === pathName); 
    
    return (
        <div>
            <h2>{experience.name}</h2>
            <h3>{experience.place}</h3>
            <h3>{experience.time}</h3>
            <p>{experience.detail}</p>
            <h3>Compétences</h3>
            {/* list of skills */}
            {/* Vidéo du projets si une existante , ou lien vers la page steam et donc la vidéo*/}
            {/* List of projects pictures*/}
            <a href={experience.projectLink} target="_blank" rel="noopener noreferrer">Accéder aux projet</a>
        </div>
    );
}