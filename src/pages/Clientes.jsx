import React from "react";

export default function Clientes() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">Clientes y Aliados Estratégicos</h1>
      <p className="text-center lead mb-5">
        En Montreal Atlacomulco colaboramos con instituciones educativas y organizaciones que
        comparten nuestra visión: transformar la educación mediante el idioma, la tecnología y la cultura.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body text-center p-4">
              <h3 className="fw-bold text-primary">Escuela Primaria “Miguel Hidalgo y Costilla”</h3>
              <p className="mt-3">
                Aliado estratégico en la implementación de programas de inglés, tecnología y 
                actividades culturales en la comunidad de Atlacomulco.
              </p>
              <p className="text-muted">
                📍 Atlacomulco, Estado de México
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
