import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Header from "./components/_organisms/header/Header";
import Home from "./components/_organisms/home/Home";
import Footer from "./components/_organisms/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
  </React.StrictMode>
);
