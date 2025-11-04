import React, { useState } from "react";

export default function ContactoFormulario() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contacto/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage("✅ ¡Tu mensaje ha sido enviado correctamente!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage(
          `❌ Error: ${data.error || "No se pudo enviar el mensaje."}`
        );
      }
    } catch (error) {
      setStatusMessage(`⚠️ Error de conexión: ${error.message}`);
    } finally {
      setIsSending(false);
      const modal = new window.bootstrap.Modal(
        document.getElementById("contactModal")
      );
      modal.show();
    }
  };

  return (
    <>
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-12 mb-3">
          <textarea
            className="form-control"
            name="message"
            placeholder="Mensaje o comentario"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="col-md-12 text-center">
          <button
            type="submit"
            className="btn btn-danger btn-lg"
            disabled={isSending}
          >
            {isSending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </div>
      </form>

      {/* Modal de confirmación */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center p-4">
            <h5
              id="contactModalLabel"
              className={
                statusMessage.startsWith("✅")
                  ? "text-success"
                  : "text-danger"
              }
            >
              {statusMessage}
            </h5>
            <button
              type="button"
              className="btn btn-primary mt-3"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
