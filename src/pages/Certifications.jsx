import React from "react";

export default function Certifications() {
  // 🔹 Datos estáticos (sin backend)
  const certificaciones = [
    {
      id: 1,
      alumno: "Ana López Ramírez",
      curso: "Inglés A2 - Key English Test (KET)",
      folio: "MONT2025-001",
      fecha_emision: "2025-03-10",
    },
    {
      id: 2,
      alumno: "José Hernández Pérez",
      curso: "Inglés B1 - Preliminary English Test (PET)",
      folio: "MONT2025-002",
      fecha_emision: "2025-03-10",
    },
    {
      id: 3,
      alumno: "María García Torres",
      curso: "Inglés B2 - First Certificate (FCE)",
      folio: "MONT2025-003",
      fecha_emision: "2025-03-11",
    },
    {
      id: 4,
      alumno: "Carlos Rodríguez Díaz",
      curso: "Inglés C1 - Advanced (CAE)",
      folio: "MONT2025-004",
      fecha_emision: "2025-03-12",
    },
  ];

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
            Consulta las certificaciones emitidas por el Instituto Montreal Atlacomulco.
          </p>
        </div>
      </section>

      {/* ===== LISTA DE CERTIFICACIONES ===== */}
      <section className="py-5 bg-light">
        <div className="container">
          {certificaciones.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped align-middle text-center shadow-sm">
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
            <p className="text-center text-muted">
              No hay certificaciones disponibles en este momento.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
