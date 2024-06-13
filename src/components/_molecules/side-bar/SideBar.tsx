import { Link } from "react-router-dom";
import HomeIcon from "../../../assets/svg/HomeIcon";
import LogoutIcon from "../../../assets/svg/LogoutIcon";
import NewUserIcon from "../../../assets/svg/NewUserIcon";
import ReportIcon from "../../../assets/svg/ReportIcon";
import SideBarIcon from "../../_atoms/box/side-Bar/SideBarIcon";
import styles from "./sideBar.module.css";

export default function SideBar() {
  return (
    <nav className={styles.container}>
      <Link to={"/main"}>
        <SideBarIcon icon={<HomeIcon />} text="home" />
      </Link>
      <Link to={"user_registration"}>
        <SideBarIcon icon={<NewUserIcon />} text="+ Voluntário" />
      </Link>
      <Link to={"/report"}>
        <SideBarIcon icon={<ReportIcon />} text="relatórios" />
      </Link>
      <Link to={""}>
        <SideBarIcon icon={<LogoutIcon />} text="sair" />
      </Link>
    </nav>
  );
}
