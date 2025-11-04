import React, { useState } from "react";

export default function Contacto() {
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
        setStatusMessage(`❌ Error: ${data.error || "No se pudo enviar el mensaje"}`);
      }
    } catch (error) {
      setStatusMessage(`⚠️ Error de conexión: ${error.message}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: "#D32F2F" }}>
          Contáctanos
        </h2>

        <form onSubmit={handleSubmit} className="row justify-content-center">
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

          {statusMessage && (
            <div className="col-md-12 text-center mt-3">
              <p
                className={
                  statusMessage.startsWith("✅")
                    ? "text-success fw-bold"
                    : "text-danger fw-bold"
                }
              >
                {statusMessage}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
