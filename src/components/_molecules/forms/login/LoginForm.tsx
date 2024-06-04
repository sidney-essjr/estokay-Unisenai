import Button from "../../../_atoms/buttons/Button";
import Input from "../../../_atoms/inputs/Input";
import styles from "./loginForm.module.css";

export default function LoginForm() {
  return (
    <form action="" className={styles.content}>
      <Input
        id="email"
        label="e-mail*"
        placeholder="ex. seunome@gmail.com"
        type="email"
      />
      <Input
        id="senha"
        label="senha*"
        placeholder="ex. sua senha"
        type="password"
      />
      <Button>acessar minha conta</Button>
    </form>
  );
}
