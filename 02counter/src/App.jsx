import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 5;

  const addValue = () => {
    if (counter >= 20) return;
    // counter = counter + 1;

    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeValue = () => {
    if (counter <= 0) return;
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Chai</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>{counter}</p>
    </>
  );
}

export default App;
