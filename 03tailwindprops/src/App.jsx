import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let newArr = [1, 2, 3];
  let myObj = {
    Name: "Harsh",
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>

      <Card username="Harsh" btnTxt="Click Me" tags={["photography", "travel", "winter"]} />
      <br />
      <Card username="PK" btnTxt="Visit Me" tags={["photography", "travel", "winter"]} />
    </>
  );
}

export default App;
