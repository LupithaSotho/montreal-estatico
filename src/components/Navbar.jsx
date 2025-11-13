import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    if (location.pathname === "/") {
      // ya estás en home → solo scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // vienes de /cursos, /certificaciones, etc. → mandamos target al home
      navigate("/", { state: { target: sectionId } });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "linear-gradient(90deg, #1565C0, #7B1FA2)" }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <img
            src={logo}
            alt="Logo Montreal"
            width="45"
            className="me-2 rounded-circle"
          />
          Montreal Atlacomulco
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

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
              <Link className="nav-link" to="/certificaciones">Certificaciones</Link>
            </li>

            
             <li className="nav-item">
              <button
                className="nav-link btn btn-link p-0"
                onClick={() => goToSection("aliados")}
              >
                Aliados estratégicos
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link p-0"
                onClick={() => goToSection("portafolio")}
              >
                Portafolio
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link p-0"
                onClick={() => goToSection("testimonios")}
              >
                Testimonios
              </button>
            </li>


            <li className="nav-item">
              <button
                onClick={() => goToSection("contacto")}
                className="btn btn-outline-light ms-2"
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
