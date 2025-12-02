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
      style={{ width: "100%", cursor: "pointer" }}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 style={{ marginTop: "10px" }}>{title}</h3>
      <p>{description}</p>

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
              background: "#eaeaea",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <span>{tag.icon}</span> {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
}
