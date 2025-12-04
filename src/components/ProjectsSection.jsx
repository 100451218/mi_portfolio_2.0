import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      {projects.map((p, i) => (
        <div key={i}>
          {/* Card resumida */}
          <ProjectCard {...p} />

          {/* Información extra en detalle (solo aparece en esta sección) */}
          {p.detailContent && (
            <div
              style={{
                marginTop: "15px",
                padding: "15px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              {p.detailContent}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
