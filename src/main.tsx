import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AppProviders } from "#/providers";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
