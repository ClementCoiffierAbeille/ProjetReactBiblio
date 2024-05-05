/* Old */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* New */
import { RouterProvider } from "react-router-dom";
import router from "./routes/root";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
