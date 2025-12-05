import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../styles/ProjectDetails.css";

const ProjectDetails = forwardRef(({ projects }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    selectProject: (index) => setActiveIndex(index),
  }));

  return (
    <div className="project-details-container">
      {/* MENÚ LATERAL */}
      <div className="project-menu">
        {projects.map((proj, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={idx === activeIndex ? "active" : ""}
          >
            {proj.details.title}
          </button>
        ))}
      </div>

      {/* CONTENIDO DETALLADO */}
      <div className="scrollable project-content">
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            marginBottom: "10px",
            color: "var(--color-primary)",
          }}
        >
          {projects[activeIndex].details.title}
        </h3>

        {projects[activeIndex].details.content}
      </div>
    </div>
  );
});

export default ProjectDetails;
