import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToContacto = () => {
    if (location.pathname === "/") {
      const contactoSection = document.getElementById("contacto");
      if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const contactoSection = document.getElementById("contacto");
        if (contactoSection) {
          contactoSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
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
              <Link className="nav-link" to="/cursos">Cursos</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/certificaciones">Certificaciones</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/clientes">Aliados estratégicos</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/galeria">Galería</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/testimonios">Testimonios</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/quienes-somos">Quiénes somos</Link>
            </li>

            <li className="nav-item">
              <button
                onClick={scrollToContacto}
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
