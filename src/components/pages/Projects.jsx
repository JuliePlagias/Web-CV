import Block from "../Block";

export default function Projects({isMobile}){
    const data = require("../../assets/projects.json");

    return (
        <div className="blockSection">
            {
                data.map((project, index)=>(
                <Block key={index} name={project.name} image={project["background-img"]} link={project.link}
                details={project.intro} isMobile={isMobile}/>))
            }
        </div>
    );
}