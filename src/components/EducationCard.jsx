export default function EducationCard({ image, title, subtitle, years }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "var(--color-surface)",
        color: "var(--color-text)",
        borderRadius: "12px",
        padding: "1rem",
        border: "1px solid var(--color-secondary)",
        transition: "0.25s",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "15px",
        }}
      />
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: "600",
          color: "var(--color-primary)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "1rem",
          color: "var(--color-text-secondary)",
          margin: "5px 0",
        }}
      >
        {subtitle}
      </p>
      <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
        {years}
      </p>
    </div>
  );
}
