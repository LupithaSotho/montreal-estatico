import React from "react";
import { Link } from "react-router-dom";
import certBanner from "../assets/certificaciones-banner.png";


export default function Courses() {
  return (
    <div>

      {/* Encabezado */}
      <section
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(90deg, #D32F2F, #1565C0, #388E3C, #FBC02D, #7B1FA2)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold mb-3">Nuestros Cursos</h1>
          <p className="lead">
            Programas diseñados para desarrollar tus competencias lingüísticas, tecnológicas y culturales.
          </p>
        </div>
      </section>

      {/* Cursos */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 text-center">

            {/* Inglés */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="text-danger fw-bold">Inglés</h4>
                  <p>
                    Aprende inglés desde nivel principiante hasta avanzado, con preparación para certificaciones internacionales.
                  </p>
                  <ul className="list-unstyled text-secondary small">
                    <li>📘 Niveles: Starters, Movers, Flyers</li>
                    <li>📗 Avanzados: A2, B1, B2, C1, C2</li>
                  </ul>
                  <Link to="/enroll" className="btn btn-outline-danger mt-3">
                    Inscribirme
                  </Link>
                </div>
              </div>
            </div>

            {/* Computación */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="text-primary fw-bold">Computación</h4>
                  <p>
                    Domina herramientas digitales y programación con cursos diseñados para cada nivel de experiencia.
                  </p>
                  <ul className="list-unstyled text-secondary small">
                    <li>💻 Niveles: Básico, Intermedio, Avanzado, Programador</li>
                  </ul>
                  <Link to="/enroll" className="btn btn-outline-primary mt-3">
                    Inscribirme
                  </Link>
                </div>
              </div>
            </div>

            {/* Regularización */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="text-success fw-bold">Regularización</h4>
                  <p>
                    Refuerza tus conocimientos con apoyo personalizado en diversas materias del plan educativo.
                  </p>
                  <ul className="list-unstyled text-secondary small">
                    <li>📚 Matemáticas, Español, Ciencias, Historia</li>
                  </ul>
                  <Link to="/enroll" className="btn btn-outline-success mt-3">
                    Inscribirme
                  </Link>
                </div>
              </div>
            </div>

            {/* Cultura */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4 className="fw-bold" style={{ color: "#7B1FA2" }}>Cultura</h4>
                  <p>
                    Talleres de arte, lectura y expresión que fomentan la creatividad y la identidad cultural.
                  </p>
                  <ul className="list-unstyled text-secondary small">
                    <li>🎨 Talleres: Arte, Lectura, Expresión</li>
                  </ul>
                  <Link to="/enroll" className="btn btn-outline-dark mt-3">
                    Inscribirme
                  </Link>
                </div>
              </div>
            </div>

            {/* Preparación para Certificaciones Cambridge */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <img
                    src={certBanner}
                    alt="Certificaciones Cambridge"
                    className="img-fluid rounded mb-3"
                  />
                  <h4 className="fw-bold" style={{ color: "#1565C0" }}>
                    Preparación para Certificaciones Cambridge
                  </h4>
                  <p>
                    Prepárate para los exámenes Cambridge English (Starters, Movers, Flyers, KET, PET, FCE, CAE, CPE)
                    y obtén tu certificación oficial reconocida internacionalmente.
                  </p>
                  <Link to="/certificaciones" className="btn btn-outline-primary mt-3 fw-bold">
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA final */}
      <section
        className="text-center text-white py-5"
        style={{ background: "linear-gradient(90deg, #388E3C, #D32F2F)" }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">¡Alcanza tus metas con Montreal!</h2>
          <p className="mb-4">
            Inscríbete en el curso que más se adapte a tus necesidades y certifícate internacionalmente.
          </p>
          <a href="/enroll#formulario" className="btn btn-light btn-lg fw-bold">
            Ir a Inscribirme
          </a>
        </div>
      </section>

      
    </div>
  );
}
