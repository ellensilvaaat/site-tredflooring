import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./assets/styles/typography.css";
import "./assets/styles/variables.css";
import "./assets/styles/global.css";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <App />
    <SpeedInsights /> 
    </HelmetProvider>
  </StrictMode>
);
