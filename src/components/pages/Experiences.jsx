import Block from "../Block";

export default function Experiences({isMobile}){
    const data = require("../../assets/experiences.json");

    return (
        <div className="blockSection">
            {
                data.map((experience, index)=>(
                <Block key={index} name={experience.name} image={experience["background-img"]} link={experience.link}
                details={experience.intro} isMobile={isMobile}/>))
            }
        </div>
    );
}