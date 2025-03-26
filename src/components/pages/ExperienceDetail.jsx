import { useLocation } from "react-router-dom";
import SkillBlock from "../SkillBlock";

export default function ExperienceDetail(){
    const location = useLocation();
    const data = require("../../assets/experiences.json");
    const skills = require("../../assets/skills.json");
    const pathName = location.pathname.split("/").pop();
    const experience = data.find((obj)=>obj.link === pathName); 
    
    return (
        <div className="experience-details">
            <h2>{experience.name}</h2>
            <h3>{experience.place} - {experience.time}</h3>
            <p>{experience.detail}</p>
            <div className="imgs">
            {Object.values(experience.imgs).map((img, index)=>(
                    <img key={index} src={`../assets/images/${img}.png`} alt={`image du projet ${index}`}></img>
                ))}
            </div>
            {
                experience.projectLink && 
                    <a href={experience.projectLink} target="_blank" rel="noopener noreferrer">Accéder aux projet</a>
            }
            <h3>Compétences</h3>
            <h4>Compétences techniques</h4>
            <ul>
                {Object.values(experience.skills).map((skill, index) => {
                    const result = skills.hard.find(item=> item.name === skill);
                    return result ? (
                    <SkillBlock key={index} name={result.name} logo={result.logo} progress={result.progress}/>
                    )
                    :"";
                })}
            </ul>
            <h4>Compétences douces</h4>
            <ul>
            {Object.values(experience.skills).map((skill, index) => {
                const result = skills.soft.find(item=> item.name === skill);
                return result ? (
                    <li key={index}>{skill.name}</li>
                )
                :"";
            })}
            </ul>
        </div>
    );
}