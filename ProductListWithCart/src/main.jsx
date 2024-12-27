import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { OrderProvider } from "./hooks/useOrderProduct.jsx";

createRoot(document.getElementById("root")).render(
  <OrderProvider>
    <App />
  </OrderProvider>
);
