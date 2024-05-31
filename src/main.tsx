import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <main>
      <Home />
    </main>
  </React.StrictMode>
);
