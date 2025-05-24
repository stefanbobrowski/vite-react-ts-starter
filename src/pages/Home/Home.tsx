import Example from '../../components/Example/Example';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.home}>
      <h2 className={styles.title}>Home</h2>
      <p>Welcome to the Vite + React + TypeScript Starter Template!</p>

      <h3>🚀 What is this?</h3>
      <p>
        This is a modern and minimal starter template for building React apps using Vite,
        TypeScript, and SCSS. It's designed for real-world production readiness, but light enough to
        be cloned and extended for personal projects.
      </p>

      <h3>🔧 Built with:</h3>
      <ul>
        <li>⚡ Vite (with SWC for fast builds)</li>
        <li>⚛️ React 19</li>
        <li>🧠 TypeScript</li>
        <li>🎨 SCSS + CSS Modules</li>
        <li>🎯 React Router</li>
        <li>🛠️ ESLint + Prettier + EditorConfig</li>
      </ul>

      <h3>📦 Features:</h3>

      <ol>
        <li>
          ✅ <strong>React Router v6</strong> with <code>NavLink</code> and layout-ready routing
        </li>
        <li>
          ✅ <strong>TypeScript</strong> setup with type safety and strict mode
        </li>
        <li>
          ✅ <strong>SASS (SCSS)</strong> with modular file support
        </li>
        <li>
          ✅ <strong>CSS Modules</strong> for scoped and safe styles
        </li>
        <li>
          ✅ <strong>Global CSS Reset</strong>
        </li>

        <li>
          ✅ <strong>Dark/Light theme support</strong> using CSS custom properties
        </li>
        <li>
          ✅ <strong>Example Component</strong> with SCSS modules and hooks
        </li>
        <li>
          ✅ <strong>VS Code integration</strong> (<code>.vscode/settings.json</code>,{' '}
          <code>.editorconfig</code>)
        </li>
        <li>
          ✅ <strong>ESLint + Prettier</strong> pre-configured for modern standards
        </li>
        <li>
          ✅ <strong>GitHub Actions PR Validation</strong> – Automatically lints and builds on pull
          requests targeting <code>main</code>
        </li>
      </ol>

      <p>🔧 Nothing super opinionated. Just fast, clean, and extensible.</p>

      <p>
        See full GitHub code:{' '}
        <a
          href="https://github.com/stefanbobrowski/vite-react-ts-starter"
          target="_blank"
          rel="noopener noreferrer"
          title="View project source on GitHub"
        >
          vite-react-ts-starter
        </a>
      </p>

      <Example />
    </main>
  );
};

export default Home;

// # Vite + React + TypeScript – Starter Template

// ## 🚀 What is this?

// This is a modern and minimal starter template for building React apps using Vite, TypeScript, and SCSS. It's designed for real-world production readiness, but light enough to be cloned and extended for personal projects.

// Built with:

// - ⚡ Vite (with SWC for fast builds)
// - ⚛️ React 19
// - 🧠 TypeScript
// - 🎨 SCSS + CSS Modules
// - 🎯 React Router
// - 🛠️ ESLint + Prettier + EditorConfig

// ---

// ## 📦 Features

// 1. ✅ **React Router v6** with `NavLink` and layout-ready routing
// 2. ✅ **TypeScript** setup with type safety and strict mode
// 3. ✅ **SASS (SCSS)** with modular file support
// 4. ✅ **CSS Modules** for scoped and safe styles
// 5. ✅ **Global CSS Reset**
// 6. ✅ **Dark/Light theme support** using CSS custom properties
// 7. ✅ **Example Component** with SCSS modules and hooks
// 8. ✅ **VS Code integration** (`.vscode/settings.json`, `.editorconfig`)
// 9. ✅ **ESLint + Prettier** pre-configured for modern standards
// 10. ✅ **GitHub Actions PR Validation** – Automatically lints and builds on pull requests targeting `main`

// 🔧 Nothing super opinionated. Just fast, clean, and extensible.
