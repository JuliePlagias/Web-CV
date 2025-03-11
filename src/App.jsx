import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "./styles/main.scss";
import Formations from "./components/pages/Formations";
import FormationDetail from "./components/pages/FormationDetail";
import Layout from "./components/navigation/Layout";
import Skills from "./components/pages/Skills";
import { useEffect, useState } from "react";
import ExperienceDetail from "./components/pages/ExperienceDetail";
import Experiences from "./components/pages/Experiences";

function App() {
  const [isMobile, setIsMobile] =useState(false);
  
      useEffect(()=>{
          const checkIfMobile=()=>setIsMobile(window.matchMedia("(max-width:1280px").matches);
          checkIfMobile();
          window.addEventListener("resize",checkIfMobile);
          return ()=>window.removeEventListener("resize", checkIfMobile);
  },[]);
  return (
    <BrowserRouter>
      <div className="background">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Layout/>}>
            <Route path="formations" element={<Formations isMobile={isMobile}/>}></Route>
            <Route path="formations/:formationId" element={<FormationDetail/>}></Route>
            <Route path="experiences" element={<Experiences isMobile={isMobile}/>}></Route>
            <Route path="experiences/:experienceId" element={<ExperienceDetail/>}></Route>
            <Route path="competences" element={<Skills/>}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
