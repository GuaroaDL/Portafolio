import Navbar from "./componentes/Navbar.jsx";
import { Contenido } from "./componentes/Contenido.jsx";
import { Footer } from "./componentes/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="dark:bg-gray-950 dark:text-white min-h-dvh grid grid-rows-[auto_1fr_auto] font-sans text-center bg-white">
        <Navbar />
        <Contenido />
        <Footer />
      </div>
    </>
  );
}
