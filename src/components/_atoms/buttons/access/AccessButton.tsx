import { Link } from "react-router-dom";
import LockIcon from "../../../../assets/svg/LockIcon";
import UserIcon from "../../../../assets/svg/UserIcon";
import { useAuth } from "../../../../contexts/authContext";
import styles from "./access.module.css";

export default function AccessButton() {
  const auth = useAuth();

  return (
    <div className={styles.container}>
      {!auth?.currentUser ? (
        <Link to={"/login"}>
          <div className={styles.access}>
            <p>Acessar</p> <UserIcon />
          </div>
        </Link>
      ) : (
        <Link to={"/main"}>
          <div className={styles.access}>
            <p>Ambiente seguro</p>
            <LockIcon />
            <p>{auth?.currentUser?.displayName}</p>
          </div>
        </Link>
      )}
    </div>
  );
}
