import SkillBlock from "../SkillBlock";

export default function Skills(){
    const data = require("../../assets/skills.json");

    return (
        <div className="blockSection">
            {
                data.map((skill, index)=>(
                    <SkillBlock key={index} name={skill.name} logo={skill.logo} progress={skill.progress}/>
                ))
            }
        </div>
    );
}