import React, { useState, forwardRef, useImperativeHandle } from "react";

const ProjectDetails = forwardRef(({ projects }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    selectProject: (index) => setActiveIndex(index),
  }));

  return (
    <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
      {/* MENÚ LATERAL */}
      <div
        style={{ display: "flex", flexDirection: "column", minWidth: "200px" }}
      >
        {projects.map((proj, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            style={{
              padding: "12px",
              marginBottom: "8px",
              textAlign: "left",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              background:
                idx === activeIndex
                  ? "var(--color-primary)"
                  : "var(--color-surface)",
              color:
                idx === activeIndex ? "var(--color-bg)" : "var(--color-text)",
              fontWeight: idx === activeIndex ? "600" : "500",
              transition: "0.2s",
            }}
          >
            {proj.details.title}
          </button>
        ))}
      </div>

      {/* CONTENIDO DETALLADO */}
      <div
        style={{
          flex: 1,
          maxHeight: "400px",
          overflowY: "auto",
          padding: "20px",
          background: "var(--color-surface)",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          color: "var(--color-text)",
          transition: "0.25s",
        }}
      >
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
