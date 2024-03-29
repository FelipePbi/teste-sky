import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/Home";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
