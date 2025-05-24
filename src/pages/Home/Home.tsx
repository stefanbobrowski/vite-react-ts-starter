import Example from "../../components/Example/Example";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={styles.home}>
      <h2 className={styles.title}>Home</h2>
      <p>Welcome to the Vite + React + TypeScript Starter Template!</p>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Example />

      <p>
        See full GitHub code:{" "}
        <a href="https://github.com/stefanbobrowski" target="_blank">
          here
        </a>
      </p>
    </main>
  );
};

export default Home;
