import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Greeting from "./Greeting.jsx";
import Express from "./Express.jsx";
import Motivation from "./Motivation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Greeting />
    <Express />
    <Motivation />
  </React.StrictMode>
);
