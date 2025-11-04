import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();

  const scrollToFooter = () => {
    // Si ya estamos en la página principal
    if (location.pathname === "/") {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra ruta, redirigimos a Home y luego hacemos scroll
      window.location.hash = "#footer";
      setTimeout(() => {
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom shadow-sm">
      <div className="container">
        {/* LOGO + NOMBRE */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo Montreal Atlacomulco"
            width="40"
            height="40"
            className="me-2 rounded-circle"
          />
          Montreal Atlacomulco
        </Link>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ DE NAVEGACIÓN */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/quienes-somos">Quiénes somos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursos">Cursos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/enroll">Inscripciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certificaciones">Certificaciones</Link>
            </li>

            {/* 🔹 CONTACTO → hace scroll suave hasta el footer */}
            <li className="nav-item">
              <button
                onClick={scrollToFooter}
                className="nav-link btn btn-link p-0"
                style={{ textDecoration: "none" }}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
