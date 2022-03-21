import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* ЗАДАЧА: Научиться подтягивать переменную окружения из Вебпака */}
      <p>
        Value from Webpack's env:
        {process.env.SERVICE_URL}
      </p>
      <p>
        Mode:
        {process.env.NODE_ENV}
      </p>

      <h1>Current number:</h1>
      <p>{count}</p>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default App;
