import React from "react";

export default function Testimonios() {
  const testimonios = [
    {
      nombre: "María González",
      texto:
        "Montreal Atlacomulco ayudó a mis hijos a mejorar su nivel de inglés y ahora se sienten más seguros al hablar.",
    },
    {
      nombre: "Juan Pérez",
      texto:
        "Excelente atención y docentes muy preparados. La parte tecnológica fue clave para mi aprendizaje.",
    },
    {
      nombre: "Padre de familia – Primaria Miguel Hidalgo",
      texto:
        "El apoyo de Montreal ha marcado una diferencia enorme en el desarrollo académico de los alumnos.",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Testimonios y Casos de Éxito</h1>
      <p className="text-center lead mb-5">
        La satisfacción de nuestra comunidad es el motor que impulsa nuestra misión educativa.
      </p>

      <div className="row">
        {testimonios.map((t, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-0 shadow-lg rounded-4 p-4 h-100">
              <h5 className="fw-bold">{t.nombre}</h5>
              <p className="mt-3">{t.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
