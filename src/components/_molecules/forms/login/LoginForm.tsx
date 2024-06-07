import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/authContext";
import Button from "../../../_atoms/buttons/Button";
import Input from "../../../_atoms/inputs/Input";
import { FormLoginData, loginSchema } from "../../../helper/validations";
import { doSignInWithEmailAndPassword } from "../../../services/auth";
import styles from "./loginForm.module.css";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginData>({ resolver: zodResolver(loginSchema) });

  const navigate = useNavigate();
  const auth = useAuth();

  async function onSubmit(data: FormLoginData) {
    await doSignInWithEmailAndPassword(data.email, data.password);
    if (auth?.currentUser) navigate("/main");
  }

  return (
    <form
      id="firebaseui-auth-container"
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="email"
        label="e-mail*"
        placeholder="ex. seunome@gmail.com"
        type="email"
        errors={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="password"
        label="senha*"
        placeholder="ex. sua senha"
        type="password"
        errors={errors.password?.message}
        {...register("password")}
      />
      <Button>acessar minha conta</Button>
    </form>
  );
}
