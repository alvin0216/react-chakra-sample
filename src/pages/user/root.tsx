import { Provider } from "@/components/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import IndexPage from "./index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <IndexPage />
    </Provider>
  </StrictMode>
);
