import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";
import "./styles/main.scss";

function App() {
  return (
    <div className="background">
      <Navbar sectionName={"Informations"}/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
