import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilePdf, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faFilePdf, faExternalLinkAlt);
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
