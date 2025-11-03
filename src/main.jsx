import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx"; // 👈 Importación

import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import Enroll from "./pages/Enroll.jsx";
import Certifications from "./pages/Certifications.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop /> {/* 👈 Aquí se activa */}
    <Navbar />
    <div className="container-fluid p-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<About />} />
        <Route path="/cursos" element={<Courses />} />
        <Route path="/inscripciones" element={<Enroll />} />
        <Route path="/certificaciones" element={<Certifications />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
);
