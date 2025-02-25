import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/pages/Home";
import "./styles/main.scss";
import Informations from "./components/pages/Informations";
import Layout from "./components/navigation/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Layout/>}>
            <Route path="informations" element={<Informations/>}></Route>
            <Route path="projets"></Route>
            <Route path="competences"></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
