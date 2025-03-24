import React, { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("#ffffff"); // Default white background

  const colors = [
    { name: "Red", value: "#ef4444" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Green", value: "#22c55e" },
    { name: "Yellow", value: "#eab308" },
    { name: "Purple", value: "#a855f7" },
    { name: "Orange", value: "#f97316" },
    { name: "Teal", value: "#14b8a6" },
  ];

  return (
    <div
      className="w-full h-screen duration-300 flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      {/* Button container */}
      <div className="fixed bottom-12 inset-x-0 px-4 flex justify-center">
        <div className="flex flex-wrap gap-4 px-6 py-3 bg-white shadow-xl rounded-full">
          {colors.map((c) => (
            <button
              key={c.name}
              className="px-5 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: c.value }}
              onClick={() => setColor(c.value)}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorChanger;
