import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  let donkey = {
    name: "Doneky",
    age: "23",
  };

  let elephant = {
    name: "Elphant",
    age: "33",
  };

  let newArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind CSS</h1>
      <br />
      <Card name="Donkey" obj={donkey} newArr={newArr} btnText="Click Me" />
      <br />
      <Card name="Elephant"  obj={elephant} />
    </>
  );
}

export default App;
