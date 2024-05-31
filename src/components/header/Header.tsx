import UserIcon from "../svg/UserIcon";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="logo Estokay" />
      <div className={styles.acessar}>
        <p>Acessar</p>
        <UserIcon />
      </div>
    </header>
  );
}
