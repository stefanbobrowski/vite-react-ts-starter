import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Home
      </NavLink>
      |
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
