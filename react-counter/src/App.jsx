import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
    setCount((count) => count + 1);
  }
  function decreaseCounter() {
    if (count > 0) setCount(count - 1);
  }
  function resetCounter() {
    setCount(0);
  }
  return (
    <>
      <h2> Counter App</h2>
      <h1>{count}</h1>



      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
}

export default App;
