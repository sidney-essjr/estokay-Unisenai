import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../../assets/svg/Loading";
import Button from "../../../_atoms/buttons/Button";
import Input from "../../../_atoms/inputs/Input";
import {
  donationRegistration,
  FormDonationRegistration,
} from "../../../helper/validations";
import { DonatorsI } from "../../../services/getDonators";
import styles from "./donationRegistrationForm.module.css";

export default function DonationRegistrationForm({
  data,
  openAlert,
}: {
  data: DonatorsI[];
  openAlert: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormDonationRegistration>({
    resolver: zodResolver(donationRegistration),
  });

  const [donators, setDonators] = useState(data);

  useEffect(() => {
    setDonators(data);
  }, [data]);

  function onSubmit(data: FormDonationRegistration) {
    console.log(data);
    reset();
    openAlert();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Input
        id="item"
        label="item*"
        errors={errors.item?.message}
        {...register("item")}
      />
      <Input
        id="tipo"
        label="tipo*"
        list="lista-tipo"
        errors={errors.type?.message}
        {...register("type")}
      />
      <datalist id="lista-tipo">
        <option value="Alimento"></option>
        <option value="Brinquedo"></option>
        <option value="Utensílio Doméstico"></option>
        <option value="Vestuário"></option>
        <option value="Outros"></option>
      </datalist>
      <Input
        type="number"
        id="quantidade"
        label="quantidade*"
        errors={errors.quantity?.message}
        {...register("quantity")}
      />
      <Input
        id="tamanho"
        label="tamanho*"
        list="lista-tamanho"
        errors={errors.size?.message}
        {...register("size")}
      />
      <datalist id="lista-tamanho">
        <option value="Pequeno"></option>
        <option value="Médio"></option>
        <option value="Grande"></option>
      </datalist>
      <Input
        id="doador"
        label="doador*"
        list="lista-doador"
        errors={errors.donator?.message}
        {...register("donator")}
      />
      <datalist id="lista-doador">
        {donators.map((d) => (
          <option key={d.id} value={d.name}></option>
        ))}
      </datalist>
      <Input
        type="date"
        id="dataEntrada"
        label="data entrada*"
        errors={errors.entryDate?.message}
        {...register("entryDate")}
      />
      <Input
        type="date"
        id="validade"
        label="validade*"
        errors={errors.validity?.message}
        {...register("validity")}
      />
      <Button disabled={isSubmitting} variant="secondary">
        {isSubmitting ? <Loading /> : "Confirmar"}
      </Button>

      {/* {submitError.error && (
        <ValidationError>{submitError.message}</ValidationError>
      )} */}
    </form>
  );
}
