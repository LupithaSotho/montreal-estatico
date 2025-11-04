import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Para navegar sin recargar la página
import certBanner from "../assets/certificaciones-banner.png";

export default function Enroll() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  // 🔹 Opciones por curso
  const courseLevels = {
    Inglés: ["Starters", "Movers", "Flyers", "A2", "B1", "B2", "C1", "C2"],
    Computación: ["Básico", "Intermedio", "Avanzado", "Programador"],
    Regularización: ["Matemáticas", "Español", "Ciencias", "Historia", "Geografía"],
    Cultura: ["Taller de Arte", "Taller de Lectura", "Taller de Expresión"],
  };

  // 🔹 Cambiar curso seleccionado
  const handleCourseChange = (event) => {
    const course = event.target.value;
    setSelectedCourse(course);
    setSelectedLevel("");
  };

  // 🔹 Enviar formulario al backend Django
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      nombre: event.target.nombre.value,
      correo: event.target.correo.value,
      curso: selectedCourse,
      nivel: selectedLevel,
      comentarios: event.target.comentarios.value,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/inscripciones/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Inscripción registrada correctamente.");
        event.target.reset();
        setSelectedCourse("");
        setSelectedLevel("");
      } else {
        alert("❌ Error al registrar la inscripción.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Error de conexión con el servidor.");
    }
  };

  return (
    <div className="bg-light">
      {/* 🔴 Encabezado */}
      <section
        className="text-center py-5 text-white"
        style={{ backgroundColor: "#D32F2F" }}
      >
        <h1 className="fw-bold">Formulario de Inscripción</h1>
        <p>Completa tus datos y forma parte de la comunidad Montreal.</p>
      </section>

      {/* 🧾 Formulario */}
      <section className="py-5">
        <div className="container">
          <form
            id="formulario"
            onSubmit={handleSubmit}
            className="row justify-content-center"
          >
            <div className="col-md-8 col-lg-6 p-4 bg-white rounded shadow-sm">
              {/* Nombre */}
              <div className="mb-3">
                <label className="form-label fw-bold">Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Escribe tu nombre completo"
                  required
                />
              </div>

              {/* Correo */}
              <div className="mb-3">
                <label className="form-label fw-bold">Correo electrónico</label>
                <input
                  type="email"
                  name="correo"
                  className="form-control"
                  placeholder="ejemplo@correo.com"
                  required
                />
              </div>

              {/* Curso */}
              <div className="mb-3">
                <label className="form-label fw-bold">Curso</label>
                <select
                  className="form-select"
                  value={selectedCourse}
                  onChange={handleCourseChange}
                  required
                >
                  <option value="">Selecciona un curso</option>
                  <option value="Inglés">Inglés</option>
                  <option value="Computación">Computación</option>
                  <option value="Regularización">Regularización</option>
                  <option value="Cultura">Cultura</option>
                </select>
              </div>

              {/* Niveles dinámicos */}
              {selectedCourse && (
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Nivel / Subcategoría
                  </label>
                  <select
                    className="form-select"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    {courseLevels[selectedCourse].map((level, index) => (
                      <option key={index} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Bloque Cambridge (solo si selecciona Inglés) */}
              {selectedCourse === "Inglés" && (
                <div className="mt-4 p-3 border rounded bg-light">
                  <img
                    src={certBanner}
                    alt="Certificaciones Cambridge"
                    className="img-fluid rounded mb-3"
                  />
                  <h5
                    className="text-center fw-bold"
                    style={{ color: "#1565C0" }}
                  >
                    Certificaciones Cambridge
                  </h5>
                  <p className="text-center small mb-3">
                    Prepárate para los exámenes Cambridge English, reconocidos
                    internacionalmente:
                  </p>
                  <ul className="list-unstyled text-center small">
                    <li>📘 Starters (Pre A1)</li>
                    <li>📗 Movers (A1)</li>
                    <li>📙 Flyers (A2)</li>
                    <li>📕 A2 Key (KET)</li>
                    <li>📔 B1 Preliminary (PET)</li>
                    <li>📒 B2 First (FCE)</li>
                    <li>📓 C1 Advanced (CAE)</li>
                    <li>📘 C2 Proficiency (CPE)</li>
                  </ul>
                  <div className="text-center">
                    <Link
                      to="/certificaciones"
                      className="btn btn-outline-primary btn-sm fw-bold"
                    >
                      Conoce más sobre Cambridge
                    </Link>
                  </div>
                </div>
              )}

              {/* Comentarios */}
              <div className="mt-3">
                <label className="form-label fw-bold">
                  Comentarios adicionales
                </label>
                <textarea
                  name="comentarios"
                  className="form-control"
                  rows="3"
                  placeholder="Escribe algún detalle adicional..."
                ></textarea>
              </div>

              {/* Botón enviar */}
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-danger btn-lg">
                  Enviar inscripción
                </button>
              </div>
            </div>
          </form>

          {/* 🔹 Botón para ver inscripciones */}
          <div className="text-center mt-4">
            <Link
              to="/inscripciones"
              className="btn btn-outline-dark btn-sm fw-bold"
            >
              🔍 Ver inscripciones registradas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
