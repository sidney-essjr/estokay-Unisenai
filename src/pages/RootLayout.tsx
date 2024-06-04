import { Outlet } from "react-router-dom";
import Footer from "../components/_organisms/footer/Footer";
import Header from "../components/_organisms/header/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
