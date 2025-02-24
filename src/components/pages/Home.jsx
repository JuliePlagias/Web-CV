export default function Home(){
    return (
        <div className="home">
            <div className="imgContainer">
                <img src="./assets/images/portrait.jpg"></img>
            </div>
            <h1>Julie Plagias</h1>
            <p>Développeuse web en herbe,
                je me forme activement aux technologies du web pour créer des sites fonctionnels et attrayants.
                Chaque projet est une nouvelle occasion d’apprendre et de progresser.</p>
                <div className="button">
                    <p>Découvrir mon CV</p>
                </div>
            {/* <button>Découvrir mon CV</button> */}
        </div>
    );
}