
import "./App.css";

import { useState, useEffect } from "react";

const colors = ["red", "yellow", "green", "blue", "black", "purple", "teal"];

function App() {
  const [color, setColor] = useState(localStorage.getItem("bgColor") || "olive");

  useEffect(() => {
    localStorage.setItem("bgColor", color);
  }, [color]);

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-amber-50 px-4 py-3 rounded-xl">
          {colors.map((clr) => (
            <button
              key={clr}
              onClick={() => setColor(clr)}
              className="outline-none px-4 py-2 rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
              style={{
                backgroundColor: clr,
                color: clr === "yellow" ? "black" : "white",
              }}
            >
              {clr.charAt(0).toUpperCase() + clr.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


export default App;
