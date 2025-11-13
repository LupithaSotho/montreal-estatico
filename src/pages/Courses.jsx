import React from "react";

export default function Courses() {

  // 🔹 Cursos estáticos (puedes editar libremente)
  const courses = [
    {
      id: 1,
      nombre: "Inglés",
      descripcion: "Niveles desde Starters hasta C2, con preparación Cambridge.",
      duracion_horas: 120
    },
    {
      id: 2,
      nombre: "Computación",
      descripcion: "Ofimática, herramientas digitales y productividad.",
      duracion_horas: 80
    },
    {
      id: 3,
      nombre: "Programación",
      descripcion: "Desarrollo web, bases de datos y algoritmia.",
      duracion_horas: 120
    },
    {
      id: 4,
      nombre: "Ofimática",
      descripcion: "Word, Excel, PowerPoint y manejo de archivos.",
      duracion_horas: 60
    },
    {
      id: 5,
      nombre: "Regularización",
      descripcion: "Matemáticas, lectura, ciencias y apoyo escolar.",
      duracion_horas: 40
    },
    {
      id: 6,
      nombre: "Cultura",
      descripcion: "Arte, lectura, expresión cultural y creatividad.",
      duracion_horas: 40
    }
  ];

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
            {courses.map((curso) => (
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
