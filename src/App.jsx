import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import "./styles/main.scss";
import Formations from "./components/pages/Formations";
import Layout from "./components/navigation/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Layout/>}>
            <Route path="formations" element={<Formations/>}></Route>
            <Route path="projets"></Route>
            <Route path="competences"></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
