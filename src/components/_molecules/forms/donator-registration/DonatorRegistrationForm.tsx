import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Loading from "../../../../assets/svg/Loading";
import Button from "../../../_atoms/buttons/Button";
import Input from "../../../_atoms/inputs/Input";
import ValidationError from "../../../helper/erros/ValidationError";
import {
  donatorRegistration,
  FormDonatorRegistration,
} from "../../../helper/validations";
import { getCepInfo } from "../../../services/getCepInfo";
import postDonator from "../../../services/postDonator";
import styles from "./donatorRegistration.module.css";

export default function DonatorRegistrationForm({
  openAlert,
}: {
  openAlert: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormDonatorRegistration>({
    resolver: zodResolver(donatorRegistration),
  });
  const [submitError, setSubmitError] = useState({ error: false, message: "" });

  const cep = useWatch<FormDonatorRegistration>({ control, name: "cep" });

  async function cepInfo() {
    if (cep) {
      const result = await getCepInfo(cep);
      if (result?.data) {
        setValue("address", result.data.logradouro);
        setValue("city", result.data.localidade);
        setValue("district", result.data.bairro);
        setValue("district", result.data.bairro);
        setValue("uf", result.data.uf);
      }
    }
  }

  useEffect(() => {
    if (cep?.length === 8) {
      cepInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cep]);

  async function onSubmit(data: FormDonatorRegistration) {
    const result = await postDonator(data);
    if (result.error) {
      setSubmitError({ error: true, message: result.error });
    } else {
      reset();
      openAlert();
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="nome"
        errors={errors.name?.message}
        label="nome completo*"
        placeholder="ex. nome do doador"
        {...register("name")}
      />
      <Input
        id="telefone"
        errors={errors.phone?.message}
        label="telefone*"
        placeholder="ex. (xx) xxxxx-xxxx"
        {...register("phone")}
      />
      <Input
        id="cep"
        errors={errors.cep?.message}
        label="cep*"
        placeholder="ex. xxxxx-xxx"
        {...register("cep")}
      />
      <Input
        id="endereco"
        errors={errors.address?.message}
        label="endereço*"
        placeholder="ex endereço do doador"
        {...register("address")}
      />
      <Input
        id="numero"
        errors={errors.number?.message}
        label="número"
        placeholder="ex. xxxx"
        {...register("number")}
      />
      <Input
        id="bairro"
        errors={errors.city?.message}
        label="bairro*"
        placeholder="ex. bairro do doador"
        {...register("city")}
      />

      <Input
        id="cidade"
        errors={errors.city?.message}
        label="cidade*"
        placeholder="ex. cidade do doador"
        {...register("district")}
      />
      <Input
        id="uf"
        errors={errors.uf?.message}
        label="uf*"
        placeholder="ex. uf"
        {...register("uf")}
      />

      <Button disabled={isSubmitting} variant="secondary">
        {isSubmitting ? <Loading /> : "Confirmar"}
      </Button>

      {submitError.error && (
        <ValidationError>{submitError.message}</ValidationError>
      )}
    </form>
  );
}
