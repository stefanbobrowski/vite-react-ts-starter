import { useState } from 'react';
import styles from './Example.module.scss';

const Example = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
  };

  return (
    <section className={styles.example}>
      <h3 className={styles.title}>This is an example component</h3>
      <button onClick={handleIncrement}>Increment</button>
      <p>Counter: {count}</p>
    </section>
  );
};

export default Example;
