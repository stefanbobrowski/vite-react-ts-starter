import Navbar from "../Navbar/Navbar";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>This is the footer</h2>
      <Navbar />
    </footer>
  );
};

export default Footer;
