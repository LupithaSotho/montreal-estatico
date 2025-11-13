import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { target: sectionId } });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{ background: "linear-gradient(90deg, #1565C0, #7B1FA2)" }}
    >
      <div className="container">

        {/* LOGO + TEXTO */}
        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
          <img
            src={logo}
            alt="Logo Montreal"
            width="45"
            className="rounded-circle"
          />
          <span className="fs-5">Montreal Atlacomulco</span>
        </Link>

        {/* BOTÓN MÓVIL */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">

            {/* LINKS NORMALES */}
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">Inicio</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/quienes-somos">Quiénes somos</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/cursos">Cursos</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/certificaciones">Certificaciones</Link>
            </li>

            {/* SECCIONES DEL HOME */}
            <li className="nav-item">
              <button
                className="nav-link btn btn-link px-3"
                onClick={() => goToSection("aliados")}
              >
                Aliados estratégicos
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link px-3"
                onClick={() => goToSection("portafolio")}
              >
                Portafolio
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link px-3"
                onClick={() => goToSection("testimonios")}
              >
                Testimonios
              </button>
            </li>

            {/* BOTÓN CONTACTO */}
            <li className="nav-item">
              <button
                onClick={() => goToSection("contacto")}
                className="btn btn-light fw-bold px-4 py-1"
                style={{ borderRadius: "20px" }}
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
