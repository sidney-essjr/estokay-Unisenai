import HomeIcon from "../../../assets/svg/HomeIcon";
import LogoutIcon from "../../../assets/svg/LogoutIcon";
import ReportIcon from "../../../assets/svg/ReportIcon";
import SideBarIcon from "../../_atoms/box/side-Bar/SideBarIcon";
import styles from "./sideBar.module.css";

export default function SideBar() {
  return (
    <nav className={styles.container}>
      <SideBarIcon icon={<HomeIcon />} text="home" />
      <SideBarIcon icon={<ReportIcon />} text="relatórios" />
      <SideBarIcon icon={<LogoutIcon />} text="sair" />
    </nav>
  );
}
