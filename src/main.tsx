import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Header from "./components/organisms/header/Header";
import Home from "./components/organisms/home/Home";
import Footer from "./components/organisms/footer/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <main>
      <Home />
    </main>
    <Footer />
  </React.StrictMode>
);
