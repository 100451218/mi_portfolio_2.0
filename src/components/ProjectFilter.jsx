import tags from "../data/ProjectTagsInfo";
import projects from "../data/projectInfo";

export function ProjectFilter({ activeTag, onFilter }) {
  // Filtrar solo las tags marcadas como filterable
  const filterableTags = Object.keys(tags).filter(
    (key) => tags[key].filterable
  );

  // Contador dinámico
  const tagCounts = filterableTags.reduce((acc, key) => {
    acc[key] = projects.filter((p) =>
      p.card.tags.some((t) => t.name === tags[key].name)
    ).length;
    return acc;
  }, {});

  const handleClick = (key) => {
    const newActive = activeTag === key ? null : key;
    onFilter(newActive);
  };
  console.log("AAA");

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      {filterableTags.map((key) => {
        const tag = tags[key];
        return (
          <div
            key={key}
            onClick={() => handleClick(key)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 12px",
              borderRadius: "8px",
              background: activeTag === key ? "#007bff" : "#eaeaea",
              color: activeTag === key ? "white" : "black",
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
