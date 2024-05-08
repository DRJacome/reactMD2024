import { createRoot } from "react-dom/client";
import { App } from "./src/App";

/* PUNTO DE ENTRADA DE LA APLICACIÓN */
const root = createRoot(document.getElementById("app"));

root.render(<App />);
