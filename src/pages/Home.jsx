import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner1.png";
import certBanner from "../assets/certificaciones-banner.png";
import aboutImg from "../assets/about.png";

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
            <div className="col-md-5 mb-3 mb-md-0">
              <img src={aboutImg} alt="Quiénes somos" className="img-fluid rounded shadow-sm" />
            </div>
            <div className="col-md-7">
              <p>
                <strong>Montreal: Idiomas, Tecnología y Cultura Atlacomulco</strong> ofrece formación integral en
                idiomas, tecnología y cultura para niños, jóvenes y adultos, fomentando el aprendizaje activo y la innovación.
              </p>
              <Link to="/quienes-somos" className="btn btn-outline-primary mt-3">
                Leer más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TABLA DE CURSOS ====== */}
      <section id="cursos" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#388E3C" }}>
            Oferta Académica
          </h2>
          <p className="text-center mb-4">
            Descubre nuestros programas formativos en idiomas, tecnología, cultura y más.
          </p>

          {/* Botón para ver cursos */}
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
                <td>Niveles desde Starters hasta C2, con preparación Cambridge.</td>
                <td>1 año por nivel</td>
              </tr>
              <tr>
                <td>Computación</td>
                <td>Ofimática, Programación, Desarrollo Web y Bases de Datos.</td>
                <td>1 año por nivel</td>
              </tr>
              <tr>
                <td>Regularización</td>
                <td>Apoyo académico en Matemáticas, Ciencias, Español e Historia.</td>
                <td>Variable según plan</td>
              </tr>
              <tr>
                <td>Cultura</td>
                <td>Talleres de Arte, Lectura y Expresión Cultural.</td>
                <td>16 semanas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ====== CERTIFICACIONES ====== */}
      <section id="certificaciones" className="py-5 bg-white text-center">
        <div className="container">
          <img src={certBanner} alt="Certificaciones Cambridge" className="img-fluid rounded mb-3" />
          <h2 style={{ color: "#7B1FA2" }}>Certificaciones Cambridge</h2>
          <p className="mb-4">
            Prepárate para los exámenes Cambridge English (Starters, Movers, Flyers, KET, PET, FCE, CAE)
            y obtén una certificación reconocida mundialmente.
          </p>

          {/* Video institucional Cambridge */}
          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="https://www.youtube.com/embed/CIwqa_kElW4"
              title="Certificaciones Cambridge"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <Link to="/certificaciones" className="btn btn-outline-dark fw-bold">
            Más información
          </Link>
        </div>
      </section>

      {/* ====== CONTACTO ====== */}
      <section id="contacto" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#D32F2F" }}>
            Contáctanos
          </h2>
          <form className="row justify-content-center">
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Nombre completo" required />
            </div>
            <div className="col-md-6 mb-3">
              <input type="email" className="form-control" placeholder="Correo electrónico" required />
            </div>
            <div className="col-md-12 mb-3">
              <textarea className="form-control" placeholder="Mensaje o comentario" rows="4" required></textarea>
            </div>
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-danger btn-lg">
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ====== AUDIO INSTITUCIONAL ====== */}
      <section className="text-center py-5 bg-white">
        <h2 className="mb-3" style={{ color: "#1565C0" }}>
          Escucha nuestro mensaje institucional
        </h2>
        <audio controls className="w-75">
          <source src="/media/montreal-audio.mp3" type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </section>

    </div>
  );
}
