import LoginForm from "../../_molecules/forms/login/LoginForm";
import styles from "./login.module.css";

export default function Login() {
  return (
    <section className={styles.login}>
      <img
        className={styles.imgLogin}
        src="src/assets/img/imgLogin.jpg"
        alt="logo site"
      />
      <div className={styles.formLogin}>
        <img src="/logo.png" alt="" />
        <LoginForm />
      </div>
    </section>
  );
}
