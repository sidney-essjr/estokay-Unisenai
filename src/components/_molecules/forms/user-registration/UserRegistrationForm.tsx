import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../../assets/svg/Loading";
import Button from "../../../_atoms/buttons/Button";
import Checkbox from "../../../_atoms/inputs/Checkbox";
import Input from "../../../_atoms/inputs/Input";
import ValidationError from "../../../helper/erros/ValidationError";
import {
  FormUserRegistration,
  userRegistration,
} from "../../../helper/validations";
import { doCreateUserWithEmailAndPassword } from "../../../services/auth";
import styles from "./userRegistrationForm.module.css";

export default function UserRegistrationForm({
  openModal,
  openAlert,
}: {
  openModal: () => void;
  openAlert: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormUserRegistration>({
    resolver: zodResolver(userRegistration),
  });

  const [submitError, setSubmitError] = useState({ error: false, message: "" });

  async function submit(data: FormUserRegistration) {
    try {
      await doCreateUserWithEmailAndPassword(
        data.name,
        data.email,
        data.password
      );
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSubmitError({ error: true, message: "Este e-mail já está em uso" });
      } else {
        setSubmitError({ error: true, message: "Erro desconhecido" });
      }
    }
    openAlert();
    reset();
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(submit)}>
      <Input
        id="nome"
        label="nome*"
        placeholder="ex. seu nome"
        errors={errors.name?.message}
        {...register("name")}
      />
      <Input
        id="email"
        label="email*"
        type="email"
        placeholder="ex. seu e-mail"
        errors={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="senha"
        label="senha*"
        type="password"
        placeholder="******"
        errors={errors.password?.message}
        {...register("password")}
      />
      <Checkbox
        id="termos"
        label={
          <p>
            Li e concordo com os <span onClick={openModal}>termos de uso</span>
          </p>
        }
        type="checkbox"
        errors={errors.agreement?.message}
        {...register("agreement")}
      />
      <Button disabled={isSubmitting} variant="secondary">
        {isSubmitting ? <Loading /> : "Entrar"}
      </Button>
      {submitError.error && (
        <ValidationError>{submitError.message}</ValidationError>
      )}
    </form>
  );
}
