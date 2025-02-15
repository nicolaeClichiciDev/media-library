import { createRoot } from "react-dom/client";
import { App } from "./app.tsx";
import { AppProviders } from "#/providers";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
