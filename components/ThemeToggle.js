// components/ThemeToggle.js
import { useEffect, useState } from "react";

function getSystemPrefersDark() {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Three-option theme control with circles centered over labels.
 * - Auto | Light | Dark
 * - Persists choice in localStorage
 * - Applies data-theme="light|dark" on <html>, or follows system when Auto
 */
export default function ThemeToggle() {
  const [mode, setMode] = useState("auto"); // "auto" | "light" | "dark"

  // Read initial state
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark") setMode(stored);
    else setMode("auto");
  }, []);

  // Apply to document
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (mode === "light") {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else if (mode === "dark") {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      // auto
      localStorage.removeItem("theme");
      root.setAttribute("data-theme", getSystemPrefersDark() ? "dark" : "light");
    }
  }, [mode]);

  const COLORS = {
    text: "#eee8f0",
    ring: "#eee8f0",
  };

  const Item = ({ value, label }) => {
    const selected = mode === value;
    return (
      <label className={`theme-option ${selected ? "selected" : ""}`}>
        <input
          type="radio"
          name="theme"
          value={value}
          checked={selected}
          onChange={() => setMode(value)}
          aria-label={label}
        />
        {/* Circle */}
        <span className="radio" aria-hidden="true" />
        {/* Label */}
        <span className="text">{label}</span>
      </label>
    );
  };

  return (
    <div className="theme-toggle theme-choice" role="group" aria-label="Theme">
      <Item value="auto" label="Auto" />
      <Item value="light" label="Light" />
      <Item value="dark" label="Dark" />
      <style jsx>{`
        .theme-choice {
          display: inline-flex;
          align-items: center;
          gap: 1.25rem; /* spacing between the three options */
          color: ${COLORS.text};
          user-select: none;
        }
        /* Each option is a vertical stack: circle above, word below */
        .theme-option {
          display: inline-flex;
          flex-direction: column;
          align-items: center;   /* center both circle and word */
          justify-content: center;
          gap: 0.4rem;
          cursor: pointer;
          text-align: center;
          min-width: 54px; /* keeps things from squishing */
        }
        .theme-option input { display: none; }

        .radio {
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          border: 3px solid ${COLORS.ring};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: transparent;
        }
        /* Dot only when selected */
        .theme-option.selected .radio::after {
          content: "";
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background: ${COLORS.text};
          position: absolute;
        }

        .text {
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.01em;
          color: ${COLORS.text};
        }
      `}</style>
    </div>
  );
}
