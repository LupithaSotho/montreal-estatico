import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToContacto = () => {
    // Si ya estamos en la página principal
    if (location.pathname === "/") {
      const contacto = document.getElementById("contacto");
      if (contacto) {
        contacto.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra ruta, primero navegamos al inicio
      navigate("/");
      // Luego esperamos un poco para que cargue y hacemos scroll
      setTimeout(() => {
        const contacto = document.getElementById("contacto");
        if (contacto) {
          contacto.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
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

            {/* 🔹 CONTACTO → siempre lleva al formulario de contacto */}
            <li className="nav-item">
              <button
                onClick={scrollToContacto}
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

