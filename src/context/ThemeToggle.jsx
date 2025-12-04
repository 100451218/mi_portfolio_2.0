import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 12px",
        borderRadius: "20px",
        border: "1px solid var(--color-secondary)",
        background: "var(--color-surface)",
        color: "var(--color-text)",
        cursor: "pointer",
        transition: "0.25s",
      }}
    >
      {theme === "light" ? "🌙 Oscuro" : "☀️ Claro"}
    </button>
  );
}
