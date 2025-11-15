import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner1.png";
import certBanner from "../assets/certificaciones-banner.png";
import aboutImg from "../assets/about.png";
import ContactoFormulario from "../components/ContactoFormulario";
import port1 from "../assets/1.png";
import port2 from "../assets/2.jpeg";
import port3 from "../assets/3.jpeg";

export default function Home() {
  return (
    <div>
      {/* ====== ENCABEZADO PRINCIPAL ====== */}
      <header
        id="inicio"
        className="text-center text-white"
        style={{
          background: `linear-gradient(90deg, rgba(211,47,47,0.8), rgba(21,101,192,0.8)), url(${banner}) center/cover no-repeat`,
          padding: "140px 20px",
        }}
      >
        <h1 className="fw-bold">Bienvenido a Montreal Atlacomulco</h1>
        <p className="lead">
          Idiomas, Tecnología y Cultura para un aprendizaje integral y global.
        </p>
        <a href="#contacto" className="btn btn-light btn-lg fw-bold mt-3">
          Contáctanos
        </a>
      </header>

      {/* ====== QUIÉNES SOMOS ====== */}
      <section id="quienes-somos" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#1565C0" }}>
            Quiénes Somos
          </h2>

          <div className="row align-items-center">
            <div className="col-md-5">
              <img
                src={aboutImg}
                alt="Quiénes somos"
                className="img-fluid rounded shadow-sm"
              />
            </div>

            <div className="col-md-7">
              <p>
                <strong>Montreal: Idiomas, Tecnología y Cultura Atlacomulco</strong>{" "}
                ofrece formación integral para niños, jóvenes y adultos,
                fomentando el aprendizaje activo y la innovación.
              </p>
              <Link to="/quienes-somos" className="btn btn-outline-primary mt-3">
                Leer más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CURSOS ====== */}
      <section id="cursos" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#388E3C" }}>
            Oferta Académica
          </h2>

          <p className="text-center mb-4">
            Descubre nuestros programas formativos en idiomas, tecnología,
            cultura y más.
          </p>

          <div className="text-center mb-4">
            <Link
              to="/cursos"
              className="btn fw-bold btn-lg"
              style={{ backgroundColor: "#1565C0", color: "white" }}
            >
              Ver Cursos
            </Link>
          </div>

          <table className="table table-striped table-bordered text-center">
            <thead className="table-dark">
              <tr>
                <th>Área</th>
                <th>Descripción</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inglés</td>
                <td>Niveles de Starters a C2, con preparación Cambridge.</td>
                <td>1 año por nivel</td>
              </tr>
              <tr>
                <td>Computación</td>
                <td>Ofimática, Programación, Desarrollo Web y Bases de Datos.</td>
                <td>1 año por nivel</td>
              </tr>
              <tr>
                <td>Regularización</td>
                <td>Apoyo académico en Matemáticas, Ciencias y Español.</td>
                <td>Variable</td>
              </tr>
              <tr>
                <td>Cultura</td>
                <td>Talleres de arte, lectura y expresión cultural.</td>
                <td>16 semanas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ====== CERTIFICACIONES ====== */}
      <section id="certificaciones" className="py-5 bg-white text-center">
        <div className="container">
          <img
            src={certBanner}
            alt="Certificaciones Cambridge"
            className="img-fluid rounded mb-3"
          />
          <h2 style={{ color: "#7B1FA2" }}>Certificaciones Cambridge</h2>
          <p className="mb-4">
            Prepárate para los exámenes Cambridge English (Starters, Movers,
            Flyers, KET, PET, FCE, CAE) y obtén una certificación internacional.
          </p>

          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="https://www.youtube.com/embed/CIwqa_kElW4"
              title="Certificaciones Cambridge"
              allowFullScreen
            ></iframe>
          </div>

          <Link to="/certificaciones" className="btn btn-outline-dark fw-bold">
            Más información
          </Link>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ====== NUEVA SECCIÓN: ALIADOS ESTRATÉGICOS ====== */}
      {/* ===================================================== */}

      <section id="aliados" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4" style={{ color: "#1565C0" }}>Aliados Estratégicos</h2>
          <p className="mb-5">
            Trabajamos con instituciones educativas, tecnológicas y culturales
            que impulsan nuestra misión de transformar la educación.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h4 className="fw-bold">Cambridge English</h4>
                <p>Preparación certificada para exámenes internacionales.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h4 className="fw-bold">CECyTEM</h4>
                <p>Colaboración académica en Educación de Formación Dual</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h4 className="fw-bold">Comunidad COPACI</h4>
                <p>Proyectos comunitarios de aprendizaje y servicio social.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* ============= NUEVA SECCIÓN: PORTAFOLIO ============= */}
      {/* ===================================================== */}


<section id="portafolio" className="py-5 bg-white">
  <div className="container">
    <h2 className="text-center mb-4" style={{ color: "#7B1FA2" }}>
      Portafolio
    </h2>
    <p className="text-center mb-5">
      Algunos de los proyectos realizados por Montreal en idiomas, tecnología y cultura.
    </p>

    <div className="row g-4">

      {/* IMAGEN 1 */}
      <div className="col-md-4" data-aos="zoom-in">
        <div className="card shadow-sm border-0">
          <img
            src={port3}
            alt="Proyecto 1"
            className="img-fluid rounded"
            style={{ height: "240px", objectFit: "cover" }}
          />
          <div className="card-body text-center">
            <h5 className="fw-bold mb-2">Proyecto Educativos</h5>
            <p className="text-muted">Excursiones a KidZania</p>
          </div>
        </div>
      </div>

      {/* IMAGEN 2 */}
      <div className="col-md-4" data-aos="zoom-in">
        <div className="card shadow-sm border-0">
          <img
            src={port1}
            alt="Proyecto 2"
            className="img-fluid rounded"
            style={{ height: "240px", objectFit: "cover" }}
          />
          <div className="card-body text-center">
            <h5 className="fw-bold mb-2">Aplicación Web</h5>
            <p className="text-muted">Desarrollo de plataforma educativa con React y Django.</p>
          </div>
        </div>
      </div>

      {/* IMAGEN 3 */}
      <div className="col-md-4" data-aos="zoom-in">
        <div className="card shadow-sm border-0">
          <img
            src={port2}
            alt="Proyecto 3"
            className="img-fluid rounded"
            style={{ height: "240px", objectFit: "cover" }}
          />
          <div className="card-body text-center">
            <h5 className="fw-bold mb-2">Eventos </h5>
            <p className="text-muted">Talleres y proyectos con la comunidad.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ===================================================== */}
      {/* ============ NUEVA SECCIÓN: TESTIMONIOS ============= */}
      {/* ===================================================== */}

      <section id="testimonios" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#D32F2F" }}>
            Testimonios
          </h2>

          <p className="text-center mb-5">
            La experiencia de quienes han confiado en Montreal Atlacomulco.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <p>
                  “Mi hijo avanzó muchísimo en inglés. Las maestras son muy
                  pacientes y el ambiente es genial.”
                </p>
                <h6 className="fw-bold text-end">— Madre de familia</h6>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <p>
                  “Aprendí programación web y ahora puedo hacer mis propias
                  páginas. ¡Gracias Montreal!”
                </p>
                <h6 className="fw-bold text-end">— Estudiante de computación</h6>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <p>
                  “Gracias a su preparación logré aprobar mi examen Cambridge.
                  Muy recomendado.”
                </p>
                <h6 className="fw-bold text-end">— Alumna de inglés</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CONTACTO ====== */}
      <section id="contacto" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#D32F2F" }}>
            Contáctanos
          </h2>
          <ContactoFormulario />
        </div>
      </section>

      {/* ====== AUDIO INSTITUCIONAL ====== */}
      {/* ====== AUDIO INSTITUCIONAL ====== */}
      <section className="py-5 bg-white text-center">
        <h2 className="mb-3" style={{ color: "#1565C0" }}>
          Escucha nuestro mensaje institucional
        </h2>
        <audio controls className="w-75">
        <source src="/montreal-audio.mp3" type="audio/mpeg" />
         Tu navegador no soporta el elemento de audio.
        </audio>


      </section>

    </div>
  );
}
