import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      image: "https://via.placeholder.com/400x250",
      title: "Portfolio Web",
      description: "Un portfolio moderno hecho con React y TypeScript.",
      tags: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "JavaScript", icon: "🟨" },
        { name: "CSS", icon: "🎨" },
        { name: "HTML", icon: "📄" },
        { name: "UX Design", icon: "✨" },
      ],
    },
    {
      image: "https://via.placeholder.com/400x250",
      title: "Gestor de tareas",
      description: "Aplicación simple de tareas con almacenamiento local.",
      tags: [
        { name: "JavaScript", icon: "🟨" },
        { name: "CSS", icon: "🎨" },
        { name: "HTML", icon: "📄" },
      ],
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </div>
  );
}
