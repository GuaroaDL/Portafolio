export default function Home() {
  return (
    <section className=" dark:text-white p-4 sm:p-6 md:p-8 lg:p-1 mx-4 sm:mx-8 md:mx-20 grid grid-cols-1 md:grid-cols-[1fr_1fr] md:grid-rows-[1fr_0.2fr_0.2fr] gap-4">
      <div className="md:row-span-3 flex justify-center items-center">
        <img
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-lg shadow-lg object-cover transition-transform duration-500  hover:scale-105 hover:rotate-5"
          alt="Imagen de bienvenida"
          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
        />
      </div>

      <h2 className="text-2xl flex items-end dark:text-white  sm:text-2xl md:text-5xl lg:text-6xl font-bold  text-gray-600 text-left leading-tight">
        Soy Guaroa Emanuel De Leon. <br />
        Un desarrollador en desarrollo.
      </h2>

      <div className="flex items-start">
        <p className="  text-sm sm:text-base md:text-lg lg:text-xl text-left leading-relaxed">
          Soy un desarrollador web en formación con aprendizaje autodidacta y
          una fuerte motivación por crecer en el área tecnológica. Poseo
          conocimientos intermedios en{" "}
          <strong className="dark:text-sky-300">HTML, CSS y JavaScript</strong>{" "}
          así como experiencia básica a intermedia trabajando con el framework{" "}
          <strong className="dark:text-sky-300">Tailwind CSS</strong> y la
          biblioteca <strong className="dark:text-sky-300">React</strong> para
          hacer paginas mas atractivas y dinamicas. Ademas, poseo amplio
          conocimientos en administración de bases de datos con{" "}
          <strong className="dark:text-sky-300">SSMS</strong>. Me caracterizo
          por tener una mentalidad proactiva, siempre dispuesto a aprender
          nuevas tecnologías y perfeccionar mis habilidades para alcanzar mi
          máximo potencial profesional. Busco oportunidades donde pueda aportar,
          seguir aprendiendo y crecer junto a un equipo de desarrollo.
        </p>
      </div>
    </section>
  );
}
