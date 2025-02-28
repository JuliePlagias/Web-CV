import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "./styles/main.scss";
import Formations from "./components/pages/Formations";
import FormationDetail from "./components/pages/FormationDetail";
import Layout from "./components/navigation/Layout";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Layout/>}>
            <Route path="formations" element={<Formations/>}></Route>
            <Route path="formations/:formationId" element={<FormationDetail/>}></Route>
            <Route path="projets" element={<Projects/>}></Route>
            <Route path="competences" element={<Skills/>}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
