import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "./styles/main.scss";
import Formations from "./components/pages/Formations";
import FormationDetail from "./components/pages/FormationDetail";
import Layout from "./components/navigation/Layout";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import { useEffect, useState } from "react";

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
            <Route path="projets" element={<Projects isMobile={isMobile}/>}></Route>
            <Route path="competences" element={<Skills/>}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
