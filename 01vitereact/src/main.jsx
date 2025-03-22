import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com", // Fixed incorrect URL
//     target: "_blank",
//   },
//   children: "Click Me",
// };

// const reactElement = React.createElement(
//   "a",
//   { href: "https://google.com", target: "_sblank" },
//   "Click Here"
// );

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Googlee
//   </a>
// );

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
