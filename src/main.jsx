import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container max-w-[1200px] mx-auto">
        <NavBar />
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
