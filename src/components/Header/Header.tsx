import Navbar from "../Navbar/Navbar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Vite + React + TypeScript Starter Template
      </h1>
      <ThemeToggle />
      <Navbar />
    </header>
  );
};

export default Header;
