import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { Routes } from "./App.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={Routes}>
      <App />
    </RouterProvider>
  </>
);
