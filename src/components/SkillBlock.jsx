export default function SkillBlock({name, logo, progress}){
    return (
        <div className="skill-block">
            <img src={`../assets/icons/${logo}.svg`}></img>
            <p className="skill-p">{name}</p>
            <div className="bar">
                <div className="progress" style={{ width: `${progress}`}}></div>
            </div>
        </div>
    );
}