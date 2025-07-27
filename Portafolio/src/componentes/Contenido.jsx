import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";

export function Contenido() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
          {/* Ruta para no encontrados (opcional) */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </>
  );
}
