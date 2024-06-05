import { Link, useLocation } from "react-router-dom";
import LockIcon from "../../../../assets/svg/LockIcon";
import UserIcon from "../../../../assets/svg/UserIcon";
import styles from "./access.module.css";

export default function AccessButton({ path }: { path: string }) {
  const currentPath = useLocation().pathname;

  return (
    <div className={styles.container}>
      {currentPath === "/" ? (
        <Link to={path}>
          <div className={styles.access}>
            <p>Acessar</p> <UserIcon />
          </div>
        </Link>
      ) : (
        <div className={styles.access}>
          <p>Ambiente Seguro</p>
          <LockIcon />
        </div>
      )}
    </div>
  );
}
