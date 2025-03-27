import SkillBlock from "../SkillBlock";

export default function Skills(){
    const data = require("../../assets/skills.json");

    return (
        <div className="blockSection">
            <h2>Hard skills</h2>
            {
                data.hard.map((skill, index)=>(
                    <SkillBlock key={index} name={skill.name} logo={skill.logo} progress={skill.progress}/>
                ))
            }
            <h2>Soft skills</h2>
            {
                data.soft.map((skill, index)=>(
                    <li key={index}>{skill.name}</li>
                ))
            }
        </div>
    );
}