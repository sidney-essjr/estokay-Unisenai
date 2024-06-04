import { Link } from "react-router-dom";
import LoginForm from "../../_molecules/forms/login/LoginForm";
import styles from "./login.module.css";

export default function Login() {
  return (
    <section className={styles.login}>
      <img
        className={styles.imgLogin}
        src="src/assets/img/imgLogin.jpg"
        alt=""
      />
      <div className={styles.formLogin}>
        <img src="/logo.png" alt="" />
        <LoginForm />
        <p>
          Ainda não tem uma conta? <Link to=""> Cadastre-se</Link>
        </p>
      </div>
    </section>
  );
}
