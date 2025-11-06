import React, { useEffect, useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  // 🔹 URL del backend en Railway
  const API_URL = "https://montreal-backend-production.up.railway.app";

  useEffect(() => {
    fetch(`${API_URL}/api/cursos/`)
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error al cargar cursos:", err));
  }, []);

  return (
    <div>
      {/* ===== ENCABEZADO ===== */}
      <section
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(90deg, #1976D2, #512DA8)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold mb-3">Nuestros Cursos</h1>
          <p className="lead">
            Descubre las distintas áreas de formación que ofrecemos para tu crecimiento académico y profesional.
          </p>
        </div>
      </section>

      {/* ===== LISTA DE CURSOS ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {courses.length > 0 ? (
              courses.map((curso) => (
                <div key={curso.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card shadow-sm h-100 border-0">
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold" style={{ color: "#1976D2" }}>
                        {curso.nombre}
                      </h5>
                      <p className="card-text text-muted">{curso.descripcion}</p>
                      <p className="fw-semibold">
                        Duración: {curso.duracion_horas} horas
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">Cargando cursos...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

