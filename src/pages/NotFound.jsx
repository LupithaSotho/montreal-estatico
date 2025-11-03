import React from "react";

export default function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1 style={{ color: "#D32F2F" }}>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe o fue movida.</p>
      <a href="/" className="btn btn-danger mt-3">
        Volver al inicio
      </a>
    </div>
  );
}
