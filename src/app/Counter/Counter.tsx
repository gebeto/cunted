import { useState } from "preact/hooks";
import * as classes from "./Counter.module.css";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <main onClick={() => setCount(count + 1)}>
        <h1 className={classes.count}>{count}</h1>
      </main>

      <footer>
        <button
          className={classes.reset}
          type="button"
          onClick={() => setCount(0)}
        >
          reset
        </button>
      </footer>
    </>
  );
};
