import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/_organisms/header/Header";
import SideBar from "../../components/_molecules/side-bar/SideBar";
import styles from "./rootLayout.module.css";

export default function RootLayout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className={styles.container}>
        {location.pathname !== "/" && <SideBar />}
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
