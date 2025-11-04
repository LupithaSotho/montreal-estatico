import React, { useEffect, useState } from "react";

export default function Inscripciones() {
  const [inscripciones, setInscripciones] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    curso: "",
    nivel: "",
    comentarios: "",
  });

  // Cargar inscripciones
  const cargarInscripciones = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/inscripciones/");
    const data = await res.json();
    setInscripciones(data);
  };

  // Eliminar inscripción
  const eliminarInscripcion = async (id) => {
    if (window.confirm("¿Seguro que deseas eliminar esta inscripción?")) {
      await fetch(`http://127.0.0.1:8000/api/inscripciones/${id}/`, {
        method: "DELETE",
      });
      cargarInscripciones();
    }
  };

  // Editar inscripción
  const iniciarEdicion = (inscripcion) => {
    setEditId(inscripcion.id);
    setFormData(inscripcion);
  };

  // Guardar cambios
  const guardarEdicion = async (e) => {
    e.preventDefault();
    await fetch(`http://127.0.0.1:8000/api/inscripciones/${editId}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setEditId(null);
    cargarInscripciones();
  };

  // Manejar inputs del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    cargarInscripciones();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold text-danger">
        Consultar / Editar / Eliminar Inscripciones
      </h2>

      {/* Tabla de inscripciones */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Curso</th>
            <th>Nivel</th>
            <th>Comentarios</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {inscripciones.map((item) => (
            <tr key={item.id}>
              <td>{item.nombre}</td>
              <td>{item.correo}</td>
              <td>{item.curso}</td>
              <td>{item.nivel}</td>
              <td>{item.comentarios}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => iniciarEdicion(item)}
                >
                  ✏️ Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarInscripcion(item.id)}
                >
                  🗑️ Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulario de edición */}
      {editId && (
        <div className="card mt-5 p-4 shadow-sm">
          <h4 className="text-center text-primary mb-3">Editar inscripción</h4>
          <form onSubmit={guardarEdicion}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Nombre</label>
                <input
                  name="nombre"
                  className="form-control"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Correo</label>
                <input
                  name="correo"
                  className="form-control"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Curso</label>
                <input
                  name="curso"
                  className="form-control"
                  value={formData.curso}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Nivel</label>
                <input
                  name="nivel"
                  className="form-control"
                  value={formData.nivel}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label fw-bold">Comentarios</label>
                <textarea
                  name="comentarios"
                  className="form-control"
                  value={formData.comentarios}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success me-2">
                💾 Guardar cambios
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEditId(null)}
              >
                ❌ Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
