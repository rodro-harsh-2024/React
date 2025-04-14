import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1 className="">A blog with appwrite</h1>
    </>
  );
}

export default App;
