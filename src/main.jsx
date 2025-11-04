import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Enroll from "./pages/Enroll.jsx";
import Inscripciones from "./pages/Inscripciones.jsx"; // ✅ Importa la página de lista
import Certifications from "./pages/Certifications.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Navbar />

      <div className="container-fluid p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<About />} />
          <Route path="/cursos" element={<Courses />} />

          {/* ✅ Rutas distintas para inscripción y lista */}
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/inscripciones" element={<Inscripciones />} />

          <Route path="/certificaciones" element={<Certifications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </HashRouter>
  </React.StrictMode>
);
