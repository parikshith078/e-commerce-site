import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import GlobalContextProvider from "./lib/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <div className="container max-w-[1200px] mx-auto">
          <NavBar />
          <App />
        </div>
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>
);
