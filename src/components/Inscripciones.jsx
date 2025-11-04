import React, { useEffect, useState } from "react";

export default function Inscripciones() {
  const [inscripciones, setInscripciones] = useState([]);

  const cargarInscripciones = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/inscripciones/");
    const data = await res.json();
    setInscripciones(data);
  };

  const eliminarInscripcion = async (id) => {
    if (window.confirm("¿Deseas eliminar esta inscripción?")) {
      await fetch(`http://127.0.0.1:8000/api/inscripciones/${id}/`, {
        method: "DELETE",
      });
      cargarInscripciones();
    }
  };

  useEffect(() => {
    cargarInscripciones();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Listado de Inscripciones</h2>
      <table className="table table-bordered table-striped">
        <thead>
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
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminarInscripcion(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
