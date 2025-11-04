import React, { useState } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/banner1.png";
import certBanner from "../assets/certificaciones-banner.png";
import aboutImg from "../assets/about.png";

export default function Home() {
  // Estado del formulario de contacto
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Enviar formulario al backend Django
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contacto/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("✅ ¡Tu mensaje ha sido enviado correctamente!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage(
          `❌ Error: ${data.error || "No se pudo enviar el mensaje."}`
        );
      }
    } catch (error) {
      setStatusMessage(`⚠️ Error de conexión: ${error.message}`);
    } finally {
      setIsSending(false);

      // Mostrar modal de confirmación (usa Bootstrap JS)
      const modal = new window.bootstrap.Modal(
        document.getElementById("contactModal")
      );
      modal.show();
    }
  };

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
              <img
                src={aboutImg}
                alt="Quiénes somos"
                className="img-fluid rounded shadow-sm"
              />
            </div>
            <div className="col-md-7">
              <p>
                <strong>
                  Montreal: Idiomas, Tecnología y Cultura Atlacomulco
                </strong>{" "}
                ofrece formación integral en idiomas, tecnología y cultura para
                niños, jóvenes y adultos, fomentando el aprendizaje activo y la
                innovación.
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
                <td>
                  Niveles desde Starters hasta C2, con preparación Cambridge.
                </td>
                <td>1 año por nivel</td>
              </tr>
              <tr>
                <td>Computación</td>
                <td>
                  Ofimática, Programación, Desarrollo Web y Bases de Datos.
                </td>
                <td>1 año por nivel</td>
              </tr>
              <tr>
                <td>Regularización</td>
                <td>
                  Apoyo académico en Matemáticas, Ciencias, Español e Historia.
                </td>
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
          <img
            src={certBanner}
            alt="Certificaciones Cambridge"
            className="img-fluid rounded mb-3"
          />
          <h2 style={{ color: "#7B1FA2" }}>Certificaciones Cambridge</h2>
          <p className="mb-4">
            Prepárate para los exámenes Cambridge English (Starters, Movers,
            Flyers, KET, PET, FCE, CAE) y obtén una certificación reconocida
            mundialmente.
          </p>

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

          <form className="row justify-content-center" onSubmit={handleSubmit}>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <textarea
                className="form-control"
                name="message"
                placeholder="Mensaje o comentario"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn-danger btn-lg"
                disabled={isSending}
              >
                {isSending ? "Enviando..." : "Enviar mensaje"}
              </button>
            </div>
          </form>

          {/* Modal de confirmación */}
          <div
            className="modal fade"
            id="contactModal"
            tabIndex="-1"
            aria-labelledby="contactModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content text-center p-4">
                <h5
                  id="contactModalLabel"
                  className={
                    statusMessage.startsWith("✅")
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {statusMessage}
                </h5>
                <button
                  type="button"
                  className="btn btn-primary mt-3"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
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
