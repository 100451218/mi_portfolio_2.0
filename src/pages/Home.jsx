import React, { useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";
import projectInfo from "../data/projectInfo";
import EducationCard from "../components/EducationCard";
import ProjectTagsInfo from "../data/ProjectTagsInfo";
import { ProjectFilter } from "../components/ProjectFilter";

import { motion, AnimatePresence } from "framer-motion";

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
      image:
        "https://www.uc3m.es/uc3m/media/uc3m/img/grande/reducida700/en-ig_cabecera_vida-universitaria/1371428999250.jpg",
      title: "Grado en Ingeniería Informática",
      subtitle: "Universidad Carlos III de Madrid",
      years: "2020-2024",
    },
    {
      image: "https://hea.ie/assets/uploads/2017/04/UL-1000x500.jpg",
      title: "Bachelor's In Computer Engineering",
      subtitle: "University of Limerick (Erasmus +)",
      years: "2023-2024",
    },
    {
      image:
        "https://iesgerardodiego.com/wp-content/uploads/2018/02/ies-gerardo-diego.jpg",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 400px))",
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((proj, index) => (
              <motion.div
                key={proj.card.title} // o un id único
                layout // Permite animar el cambio de posición en el grid
                initial={{ opacity: 0, y: -20 }} // Aparece desde arriba
                animate={{ opacity: 1, y: 0 }} // A su posición normal
                exit={{ opacity: 0, y: 30 }} // Desaparece bajando
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
