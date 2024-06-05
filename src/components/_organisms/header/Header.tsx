import { Link } from "react-router-dom";
import LoginHandler from "../../_molecules/login/LoginHandler";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <img src="/logo.png" alt="logo Estokay" />
      </Link>
      <LoginHandler />
    </header>
  );
}
