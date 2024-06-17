import LoginForm from "../../_molecules/forms/login/LoginForm";
import styles from "./login.module.css";

export default function Login() {
  return (
    <section className={styles.login}>
      <div className={styles.formLogin}>
        <img src="/logo.png" alt="" />
        <LoginForm />
      </div>
    </section>
  );
}
