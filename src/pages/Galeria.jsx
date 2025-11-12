import React from "react";

export default function Galeria() {
  const imagenes = [
    "https://via.placeholder.com/400x250?text=Montreal+1",
    "https://via.placeholder.com/400x250?text=Montreal+2",
    "https://via.placeholder.com/400x250?text=Montreal+3",
    "https://via.placeholder.com/400x250?text=Montreal+4",
    "https://via.placeholder.com/400x250?text=Montreal+5",
    "https://via.placeholder.com/400x250?text=Montreal+6",
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Galería / Portafolio</h1>
      <p className="text-center lead mb-5">
        Un vistazo a nuestras actividades, proyectos, cursos y experiencias con los estudiantes.
      </p>

      <div className="row">
        {imagenes.map((img, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
              <img src={img} alt={`Galería ${index}`} className="img-fluid" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
