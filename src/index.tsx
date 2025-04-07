import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Objectives } from "./screens/Objectives";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Objectives />
  </StrictMode>,
);
