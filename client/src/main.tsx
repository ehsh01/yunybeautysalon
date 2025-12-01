import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// Make React available globally for any code that expects a global React
// @ts-ignore
(window as any).React = React;

createRoot(document.getElementById("root")!).render(<App />);
