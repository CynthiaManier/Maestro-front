import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Client from "./components/ClientList/Client/Client.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        <Client />
    </StrictMode>
);
