import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contacto/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponse("✅ " + data.success);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponse("❌ " + data.error);
      }
    } catch (error) {
      setResponse("⚠️ Error al conectar con el servidor.");
    }
  };

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: "#D32F2F" }}>
          Contáctanos
        </h2>
        <form className="row justify-content-center" onSubmit={handleSubmit}>
          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col-md-12 mb-3">
            <textarea
              className="form-control"
              placeholder="Mensaje o comentario"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="col-md-12 text-center">
            <button type="submit" className="btn btn-danger btn-lg">
              Enviar mensaje
            </button>
          </div>
        </form>
        {response && (
          <p className="text-center mt-3 fw-bold" style={{ color: "#D32F2F" }}>
            {response}
          </p>
        )}
      </div>
    </section>
  );
}
