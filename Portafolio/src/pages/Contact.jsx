import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias, ${form.nombre}. Te responderé a ${form.email}.`);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section className="border-2">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} className="max-w-400 border-2">
        <label>
          Nombre
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            style={{ display: "block", width: "100%", marginBottom: 8 }}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="block w-full mb-9 "
          />
        </label>

        <label>
          Mensaje
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
            rows={4}
            style={{ display: "block", width: "100%", marginBottom: 12 }}
          />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
