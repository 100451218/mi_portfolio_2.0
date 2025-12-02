import React, { useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";
import projectInfo from "../data/projectInfo";
import EducationCard from "../components/EducationCard";

export default function Home() {
  const projectDetailsRef = useRef();

  const handleCardClick = (index) => {
    projectDetailsRef.current.selectProject(index);
    document.getElementById("detalle-proyectos").scrollIntoView({
      behavior: "smooth",
    });
  };

  const education = [
    {
      image: "https://via.placeholder.com/120",
      title: "Grado Superior DAW",
      subtitle: "Desarrollo de Aplicaciones Web",
      years: "2018 - 2020",
    },
    {
      image: "https://via.placeholder.com/120",
      title: "Curso React",
      subtitle: "Frontend Development",
      years: "2021",
    },
  ];

  return (
    <>
      {/* SOBRE MÍ */}
      <section id="sobre-mi">
        <h2>Sobre mí</h2>
        <div
          className="card"
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Foto personal"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <p>
            ¡Hola! Soy un desarrollador web apasionado por crear experiencias
            modernas.
          </p>
        </div>
      </section>

      {/* PROYECTOS (sneak peek) */}
      <section id="proyectos">
        <h2>Proyectos</h2>

        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {projectInfo.map((proj, index) => (
            <ProjectCard
              key={index}
              {...proj.card}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </section>

      {/* FORMACIÓN */}
      <section id="formacion">
        <h2>Formación</h2>
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {education.map((edu, i) => (
            <EducationCard key={i} {...edu} />
          ))}
        </div>
      </section>

      {/* DETALLE DE PROYECTOS */}
      <section id="detalle-proyectos">
        <h2>Detalle de Proyectos</h2>
        <ProjectDetails ref={projectDetailsRef} projects={projectInfo} />
      </section>
    </>
  );
}
