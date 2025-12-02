export default function EducationCard({ image, title, subtitle, years }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
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
      <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>{title}</h3>
      <p style={{ fontSize: "1rem", color: "#555", margin: "5px 0" }}>
        {subtitle}
      </p>
      <p style={{ fontSize: "0.9rem", color: "#888" }}>{years}</p>
    </div>
  );
}
