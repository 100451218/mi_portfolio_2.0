// ProjectFilter.jsx
// Filtro horizontal con contador por tag

import tags from "./ProjectTagsInfo";
import projects from "./ProjectsInfo";
import { useState } from "react";

export function ProjectFilter({ onFilter }) {
  const [activeTag, setActiveTag] = useState(null);

  // Contadores de tags
  const tagCounts = Object.keys(tags).reduce((acc, key) => {
    acc[key] = projects.filter((p) =>
      p.tags.some((t) => t.name === tags[key].name)
    ).length;
    return acc;
  }, {});

  function handleClick(key) {
    const newActive = activeTag === key ? null : key;
    setActiveTag(newActive);
    onFilter(newActive);
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      {Object.keys(tags).map((key) => (
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
          }}
        >
          <img
            src={tags[key].icon}
            alt={tags[key].name}
            style={{ width: "18px", height: "18px" }}
          />
          <span>{tags[key].name}</span>
          <span style={{ fontWeight: 700 }}>({tagCounts[key]})</span>
        </div>
      ))}
    </div>
  );
}
