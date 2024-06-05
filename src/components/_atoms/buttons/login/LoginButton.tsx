import { Link } from "react-router-dom";
import UserIcon from "../../../../assets/svg/UserIcon";
import styles from "./login.module.css";

export default function LoginButton({ path }: { path: string }) {
  return (
    <div className={styles.login}>
      <Link to={path}>Acessar</Link>
      <UserIcon />
    </div>
  );
}
