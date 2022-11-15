import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const elementRoot = document.getElementById("root");
const root = ReactDOM.createRoot(elementRoot);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
