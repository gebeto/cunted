import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <main onClick={() => setCount(count + 1)}>
        <h1 className="count">{count}</h1>
      </main>

      <footer>
        <button className="reset" type="button" onClick={() => setCount(0)}>
          reset
        </button>
      </footer>
    </>
  );
};
