import { useLocation } from "react-router-dom";

export default function ProjectDetail(){
    const location = useLocation();
    const data = require("../../assets/projects.json");
    const pathName = location.pathname.split("/").pop();
    const project = data.find((obj)=>obj.link === pathName); 
    
    return (
        <div>
            <h2>{project.name}</h2>
            <h3>{project.place}</h3>
            <h3>{project.time}</h3>
            <p>{project.detail}</p>
            <h3>Compétences</h3>
            {/* list of skills */}
            {/* Vidéo du projets si une existante , ou lien vers la page steam et donc la vidéo*/}
            {/* List of projects pictures*/}
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Accéder aux projet</a>
        </div>
    );
}