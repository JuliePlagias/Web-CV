export default function SkillBlock({name, logo, progress}){
    return (
        <div>
            <img src={`../assets/icons/${logo}.svg`}></img>
            <h3>{name}</h3>
            {/* ma barre de progression */}
        </div>
    );
}