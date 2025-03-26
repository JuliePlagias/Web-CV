import { useLocation } from "react-router-dom";
import SkillBlock from "../SkillBlock";

export default function FormationsDetails(){
    const location = useLocation();
    const data = require("../../assets/formations.json");
    const skills = require("../../assets/skills.json");
    const pathName = location.pathname.split("/").pop();
    const formation = data.find((obj)=>obj.link === pathName); 
    return (
        <div className="formation-details">
            <h2>{ formation.name}</h2>
            <h3>{formation.place}</h3>
            <h3>{ formation.date}</h3>
            <p>{ formation.detail}</p>
            <h3>Compétences</h3>
            <h4>Compétences techniques</h4>
            <ul>
                {Object.values(formation.skills).map((skill, index) => {
                    const result = skills.hard.find(item=> item.name === skill);
                    return result ? (
                    <SkillBlock key={index} name={result.name} logo={result.logo} progress={result.progress}/>
                    )
                    :"";
                })}
            </ul>
            <h4>Compétences douces</h4>
            <ul>
            {Object.values(formation.skills).map((skill, index) => {
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