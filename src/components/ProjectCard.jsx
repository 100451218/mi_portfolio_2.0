export default function ProjectCard({
  image,
  title,
  description,
  tags = [],
  onClick,
}) {
  return (
    <div
      className="card"
      style={{
        width: "100%",
        cursor: "pointer",
        background: "var(--color-surface)",
        color: "var(--color-text)",
        borderRadius: "12px",
        padding: "1rem",
        border: "1px solid var(--color-secondary)",
        transition: "0.25s ease",
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-accent)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-secondary)";
        e.currentTarget.style.transform = "translateY(0px)";
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />

      <h3
        style={{
          marginTop: "5px",
          marginBottom: "8px",
          color: "var(--color-primary)",
        }}
      >
        {title}
      </h3>

      <p style={{ color: "var(--color-text-secondary)" }}>{description}</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "10px",
        }}
      >
        {tags.map((tag, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 10px",
              background: "var(--color-secondary)",
              color: "var(--color-bg)",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
              transition: "0.25s ease",
            }}
          >
            <span>{tag.icon}</span> {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
}
