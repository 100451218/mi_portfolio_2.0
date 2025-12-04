import React, { useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";
import projectInfo from "../data/projectInfo";
import EducationCard from "../components/EducationCard";
import ProjectTagsInfo from "../data/ProjectTagsInfo";

import { motion, AnimatePresence } from "framer-motion";

// ------------------------------
// FILTRO — Componente Interno
// ------------------------------
function ProjectFilter({ activeTag, onFilter }) {
  // Calcular cuántos proyectos tiene cada tag
  const tagCounts = Object.keys(ProjectTagsInfo).reduce((acc, key) => {
    acc[key] = projectInfo.filter((p) =>
      p.card.tags.some((t) => t.name === ProjectTagsInfo[key].name)
    ).length;
    return acc;
  }, {});

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      {Object.keys(ProjectTagsInfo).map((key) => {
        const tag = ProjectTagsInfo[key];

        return (
          <div
            key={key}
            onClick={() => onFilter(activeTag === key ? null : key)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 12px",
              borderRadius: "8px",
              background:
                activeTag === key
                  ? "var(--color-accent)"
                  : "var(--color-surface)",
              color:
                activeTag === key ? "white" : "var(--color-text-secondary)",
              border:
                activeTag === key
                  ? "2px solid var(--color-accent)"
                  : "1px solid var(--color-secondary)",
              cursor: "pointer",
              userSelect: "none",
              transition: "0.25s ease",
            }}
          >
            <img
              src={tag.icon}
              alt={tag.name}
              style={{ width: "18px", height: "18px" }}
            />
            <span>{tag.name}</span>
            <strong>({tagCounts[key]})</strong>
          </div>
        );
      })}
    </div>
  );
}

// ------------------------------
// HOME PAGE
// ------------------------------
export default function Home() {
  const projectDetailsRef = useRef();

  // Estado del filtro
  const [activeTag, setActiveTag] = useState(null);

  // ------------------------------
  // FILTRADO REAL
  // ------------------------------
  const filteredProjects =
    activeTag === null
      ? projectInfo
      : projectInfo.filter((p) =>
          p.card.tags.some((t) => t.name === ProjectTagsInfo[activeTag].name)
        );

  // ------------------------------
  // CLICK → Ir al detalle del proyecto
  // ------------------------------
  const handleCardClick = (indexInFilteredList) => {
    // Convertir índice filtrado a índice real original
    const realIndex = projectInfo.indexOf(
      filteredProjects[indexInFilteredList]
    );

    projectDetailsRef.current.selectProject(realIndex);

    document.getElementById("detalle-proyectos").scrollIntoView({
      behavior: "smooth",
    });
  };

  // ------------------------------
  // EDUCATION DATA
  // ------------------------------
  const education = [
    {
      image: "https://via.placeholder.com/120",
      title: "Grado en Ingeniería Informática",
      subtitle: "Universidad Carlos III de Madrid",
      years: "2020-2024",
    },
    {
      image: "https://via.placeholder.com/120",
      title: "Bachelor's In Computer Engineering",
      subtitle: "University of Limerick (Erasmus +)",
      years: "2023-2024",
    },
    {
      image: "https://via.placeholder.com/120",
      title: "Bachillerato de Execlencia",
      subtitle: "IES Gerardo Diego",
      years: "2018-2020",
    },
  ];

  return (
    <>
      {/* SOBRE MÍ */}
      <section id="sobre-mi">
        <h2 style={{ color: "var(--color-accent)" }}>&lt; Sobre mí /&gt;</h2>
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

      {/* PROYECTOS */}
      <section id="proyectos">
        <h2 style={{ color: "var(--color-accent)" }}>&lt; Proyectos /&gt;</h2>

        {/* FILTRO */}
        <ProjectFilter activeTag={activeTag} onFilter={setActiveTag} />

        {/* LISTA DE PROYECTOS */}
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((proj, index) => (
              <motion.div
                key={proj.card.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard
                  {...proj.card}
                  onClick={() => handleCardClick(index)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* FORMACIÓN */}
      <section id="formacion">
        <h2 style={{ color: "var(--color-accent)" }}>&lt; Formación /&gt;</h2>
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
        <h2 style={{ color: "var(--color-accent)" }}>
          &lt; Detalle de Proyectos /&gt;
        </h2>
        <ProjectDetails ref={projectDetailsRef} projects={projectInfo} />
      </section>
    </>
  );
}
