export default function SkillBlock({name, logo, progress}){
    return (
        <div className="skill-block">
            <img src={`../assets/icons/${logo}.svg`}></img>
            <h3>{name}</h3>
            <div className="bar">
                <div className="progress" style={{ width: `${progress}`}}></div>
            </div>
        </div>
    );
}