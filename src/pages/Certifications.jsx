import React, { useEffect, useState } from "react";

export default function Certifications() {
  const [certificaciones, setCertificaciones] = useState([]);

  // 🔹 URL del backend en Railway
  const API_URL = "https://montreal-backend-production.up.railway.app";

  useEffect(() => {
    fetch(`${API_URL}/api/certificaciones/`)
      .then((res) => res.json())
      .then((data) => setCertificaciones(data))
      .catch((err) => console.error("Error al cargar certificaciones:", err));
  }, []);

  return (
    <div>
      {/* ===== ENCABEZADO ===== */}
      <section
        className="text-center text-white py-5"
        style={{
          background: "linear-gradient(90deg, #1565C0, #7B1FA2)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold mb-3">Certificaciones de Inglés</h1>
          <p className="lead">
            Consulta y verifica las certificaciones emitidas por el Instituto Montreal Atlacomulco.
          </p>
        </div>
      </section>

      {/* ===== LISTA DE CERTIFICACIONES ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          {certificaciones.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped align-middle text-center">
                <thead className="table-primary">
                  <tr>
                    <th>Alumno</th>
                    <th>Curso</th>
                    <th>Folio</th>
                    <th>Fecha de emisión</th>
                  </tr>
                </thead>
                <tbody>
                  {certificaciones.map((cert) => (
                    <tr key={cert.id}>
                      <td>{cert.alumno}</td>
                      <td>{cert.curso}</td>
                      <td>{cert.folio}</td>
                      <td>{cert.fecha_emision}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-muted">Cargando certificaciones...</p>
          )}
        </div>
      </section>
    </div>
  );
}
