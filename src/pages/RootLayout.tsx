import { Outlet } from "react-router-dom";
import Footer from "../components/organisms/footer/Footer";
import Header from "../components/organisms/header/Header";

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
