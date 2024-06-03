import UserIcon from "../../../../assets/svg/UserIcon";
import styles from "./login.module.css";

export default function LoginButton({ username }: { username: string }) {
  return (
    <div className={styles.login}>
      <p>{username}</p>
      <UserIcon />
    </div>
  );
}
