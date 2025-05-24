import { useState, useEffect } from "react";
import styles from "./Theme.module.scss";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark;
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  return (
    <div className={styles.themeToggle}>
      <div className={styles.themeToggleContainer}>
        <span>Light</span>
        <label className={styles.switch}>
          <input
            type="checkbox"
            onChange={() => setDarkMode((prev) => !prev)}
            checked={darkMode}
          />
          <span className={styles.slider}></span>
        </label>
        <span>Dark</span>
      </div>
    </div>
  );
};

export default ThemeToggle;
