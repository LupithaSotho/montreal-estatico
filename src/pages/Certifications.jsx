import React from "react";

export default function Certifications() {
  return (
    <div>
      {/* Encabezado */}
      <section
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(90deg, #1565C0, #7B1FA2)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold mb-3">Certificaciones de Inglés</h1>
          <p className="lead">
            Avala tus competencias con los prestigiosos exámenes de Cambridge.
          </p>
        </div>
      </section>

      {/* Información general */}
      <section className="py-5 bg-white">
        <div className="container">
          <p>
            Somos centro autorizado para aplicar exámenes de Cambridge English:
            Starters, Movers, Flyers, KET, PET, FCE, CAE, CPE, además de IELTS y
            Linguaskill.
          </p>
          <p>
            Estas certificaciones <strong>no tienen caducidad</strong> y están
            reconocidas internacionalmente por más de 25 000 universidades,
            empresas y gobiernos.
          </p>
        </div>
      </section>

      {/* Listado de niveles */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#D32F2F" }}>
            Niveles de Cambridge
          </h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Young Learners</h5>
                  <ul>
                    <li>Starters (Pre A1)</li>
                    <li>Movers (A1)</li>
                    <li>Flyers (A2)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">General English</h5>
                  <ul>
                    <li>KET / A2 Key (A2)</li>
                    <li>PET / B1 Preliminary (B1)</li>
                    <li>FCE / B2 First (B2)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Advanced & Proficiency</h5>
                  <ul>
                    <li>CAE / C1 Advanced (C1)</li>
                    <li>CPE / C2 Proficiency (C2)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section
        className="text-center text-white py-5"
        style={{ background: "linear-gradient(90deg, #388E3C, #D32F2F)" }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Prepárate hoy mismo</h2>
          <p className="mb-4">
            Inscríbete en nuestro curso de preparación y presenta tu examen.
          </p>
          <a href="/inscripciones" className="btn btn-light btn-lg fw-bold">
            Ir a Inscripciones
          </a>
        </div>
      </section>

      
    </div>
  );
}
