import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal } from "solid-js";
import init, { inc } from "inc";

function App() {
  const [count, setCount] = createSignal(0);
  init()

  const fn = () => {
    setCount(c => inc(c));
  };
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <button onClick={fn} className={styles.count}>
          Count: {count()}
        </button>
      </header>
    </div>
  );
}

export default App;
