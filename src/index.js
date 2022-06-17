import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";

const App = () => (
  <div>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
