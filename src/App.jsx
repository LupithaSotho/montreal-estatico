import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Clientes from "./pages/clientes";
import Galeria from "./pages/Galeria";
import Testimonios from "./pages/Testimonios";
import Cursos from "./pages/Cursos";
import Certificaciones from "./pages/Certificaciones";
import QuienesSomos from "./pages/QuienesSomos";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/certificaciones" element={<Certificaciones />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
    </Router>
  );
}

export default App;
