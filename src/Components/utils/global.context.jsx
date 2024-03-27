import React, { createContext, useMemo, useState } from "react";

const ContextGlobal = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Estado local para el tema
  const [data, setData] = useState([]); // Estado local para los datos

  // Cambiar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "dark"));
  };

  // Memorizar las acciones para evitar recalculaciones innecesarias
  const contextValue = useMemo(() => {
    return { theme, data, toggleTheme, setData };
  }, [theme, data]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;


