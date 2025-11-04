import React, { useState } from "react";

export default function ContactoFormulario() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    const formData = {
      nombre: event.target.nombre.value,
      correo: event.target.correo.value,
      mensaje: event.target.mensaje.value,
    };

    try {
      // ✅ Versión simplificada sin conexión al backend
      alert(`📩 Gracias por contactarnos, ${formData.nombre}!`);
      event.target.reset();
    } catch (error) {
      alert("⚠️ Error inesperado.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      className="row justify-content-center"
      onSubmit={handleSubmit}
      style={{ maxWidth: "700px", margin: "0 auto" }}
    >
      {/* Nombre */}
      <div className="col-md-6 mb-3">
        <input
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Nombre completo"
          required
        />
      </div>

      {/* Correo */}
      <div className="col-md-6 mb-3">
        <input
          type="email"
          name="correo"
          className="form-control"
          placeholder="Correo electrónico"
          required
        />
      </div>

      {/* Mensaje */}
      <div className="col-12 mb-3">
        <textarea
          name="mensaje"
          className="form-control"
          rows="4"
          placeholder="Escribe tu mensaje o comentario..."
          required
        ></textarea>
      </div>

      {/* Botón enviar */}
      <div className="col-12 text-center">
        <button
          type="submit"
          className="btn btn-danger btn-lg px-5"
          disabled={isSending}
        >
          {isSending ? "Enviando..." : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}
