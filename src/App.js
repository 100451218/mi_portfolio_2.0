import React from "react";
import Home from "./pages/Home";
import "./index.css";

export default function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#formacion">Formación</a>
      </nav>
      <Home />
    </>
  );
}
