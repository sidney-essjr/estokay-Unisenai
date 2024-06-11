import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../assets/svg/Loading";
import { useAuth } from "../../../../contexts/authContext";
import Button from "../../../_atoms/buttons/Button";
import Input from "../../../_atoms/inputs/Input";
import ValidationError from "../../../helper/erros/ValidationError";
import { FormLoginData, loginSchema } from "../../../helper/validations";
import { doSignInWithEmailAndPassword } from "../../../services/auth";
import styles from "./loginForm.module.css";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormLoginData>({ resolver: zodResolver(loginSchema) });
  const [submitError, setSubmitError] = useState({ error: false, message: "" });

  const navigate = useNavigate();
  const auth = useAuth();

  async function onSubmit(data: FormLoginData) {
    try {
      await doSignInWithEmailAndPassword(data.email, data.password);
      if (auth?.currentUser) navigate("/main");
    } catch (error) {
      setSubmitError({
        error: true,
        message: "Dados de acesso não reconhecidos!",
      });
    }
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
      <Button disabled={isSubmitting}>
        {isSubmitting ? <Loading /> : "Acessar minha conta"}
      </Button>

      {submitError.error && (
        <ValidationError>{submitError.message}</ValidationError>
      )}
    </form>
  );
}
