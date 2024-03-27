
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import Home from "./Routes/Home"; // Importa tu componente Inicio
import Contact from "./Routes/Contact"; // Importa tu componente Contact
import Detail from "./Routes/Detail"; // Importa tu componente Detalles
import Favoritos from "./Routes/Favs"; // Importa tu componente Favoritos
import { ThemeProvider } from "./Components/utils/global.context";



function App() {
  return (
    <ThemeProvider>
<Router>
      <Navbar />
      <Footer/>
      <Routes>
      <Route path="/inicio" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<Detail />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/" element={<Navigate to="/inicio" />} />
      </Routes>
    </Router>

    </ThemeProvider>
    
  );
}

export default App;


