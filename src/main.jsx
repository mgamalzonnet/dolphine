// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n"; // Initialize i18n
import App from "./app/core/App";
import React from "react";

createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    <App />
  </React.StrictMode>
);