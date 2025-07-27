import { Link, NavLink } from "react-router-dom";

const activeStyle = ({ isActive }) => ({
  textDecoration: isActive ? "underline" : "none",
  fontWeight: isActive ? "bold" : "normal",
  marginRight: "1rem",
});

export default function Navbar() {
  return (
    <div className="dark:bg-gray-950 dark:text-white grid grid-rows-[auto_1fr_auto] font-sans text-center bg-white">
      <header className=" dark:bg-gray-950 dark:text-white bg-white border-b-sky-300 border-b-2 text-black px-4 py-3 sm:px-6 md:px-10 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1">
          <Link
            to="/"
            className="fond-bold text-2xl text-center  ml:items-center sm:text-left items-center justify-items-center"
          >
            Emanuel Dev
          </Link>
          <div className=" text-xl flex flex-wrap justify-center gap-4">
            <NavLink to="/" style={activeStyle} end>
              Home
            </NavLink>
            <NavLink to="/sobre-mi" style={activeStyle}>
              Sobre mí
            </NavLink>
            <NavLink to="/contacto" style={activeStyle}>
              Contacto
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}
