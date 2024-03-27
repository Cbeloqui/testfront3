
import React, { useState } from "react";
import ContextGlobal from "./utils/global.context";
import { Link } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, toggleTheme } = useState(ContextGlobal);

  return (
    <nav>
       <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/details/:id">Detalles</Link>
        </li>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
        {/* Otros enlaces aquí */}
      </ul>
      <button onClick={toggleTheme}>
        Cambiar a {theme === "light" ? "dark" : "dark"}
      </button>
    </nav>
  );
}

export default Navbar