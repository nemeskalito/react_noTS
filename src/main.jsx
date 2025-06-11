import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ButtonComponent from "./buttonCollor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ButtonComponent />
  </StrictMode>
);
