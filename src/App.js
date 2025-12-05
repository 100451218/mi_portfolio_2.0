import React, { useState } from "react";
import Home from "./pages/Home";
import "./index.css";
import ThemeToggle from "./context/ThemeToggle.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-header">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <span className="navbar-logo">Mi Portfolio</span>
        </div>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {/* Botón "X" para cerrar */}
          <button className="close-menu" onClick={() => setMenuOpen(false)}>
            ✕
          </button>

          <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>
            Sobre mí
          </a>
          <a href="#proyectos" onClick={() => setMenuOpen(false)}>
            Proyectos
          </a>
          <a href="#formacion" onClick={() => setMenuOpen(false)}>
            Formación
          </a>
          <ThemeToggle />
        </div>
      </nav>
      <Home />
    </>
  );
}
