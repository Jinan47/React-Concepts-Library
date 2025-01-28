import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
