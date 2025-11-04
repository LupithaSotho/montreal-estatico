import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom shadow-sm">
      <div className="container">
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
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/quienes-somos">Quiénes somos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cursos">Cursos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/enroll">Inscripciones</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/certificaciones">Certificaciones</Link></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
