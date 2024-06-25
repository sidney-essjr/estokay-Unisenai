import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../../assets/svg/Loading";
import Button from "../../../_atoms/buttons/Button";
import Input from "../../../_atoms/inputs/Input";
import ValidationError from "../../../helper/erros/ValidationError";
import printTag from "../../../helper/printTag";
import {
  donationRegistration,
  FormDonationRegistration,
} from "../../../helper/validations";
import { DonatorsI } from "../../../services/getDonators";
import postDonation from "../../../services/postDonation";
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
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormDonationRegistration>({
    resolver: zodResolver(donationRegistration),
  });

  const [donators, setDonators] = useState(data);
  const [submitError, setSubmitError] = useState({ error: false, message: "" });
  const [wasPrinted, setWasPrinted] = useState(false);

  function handleWasPrinted() {
    setWasPrinted(true);
  }

  useEffect(() => {
    setDonators(data);
  }, [data]);

  async function onSubmit(data: FormDonationRegistration) {
    let confirm = wasPrinted;
    if (!wasPrinted) {
      confirm = window.confirm(
        "\nA etiqueta não foi impressa, deseja prosseguir sem realizar a impressão?\n\nPara posterior impressão acesse a aba relatórios!"
      );
    }
    if (confirm) {
      const result = await postDonation(data);
      if (result.error) {
        setSubmitError({ error: true, message: result.error });
      } else {
        reset();
        openAlert();
      }
      setWasPrinted(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <Input
        id="item"
        label="item*"
        errors={errors.item?.message}
        placeholder="ex. nome"
        {...register("item")}
      />
      <Input
        id="tipo"
        label="tipo*"
        list="lista-tipo"
        errors={errors.type?.message}
        placeholder="ex. alimento"
        {...register("type")}
      />
      <datalist id="lista-tipo">
        <option key="alimento" value="ALIMENTO"></option>
        <option key="brinquedo" value="BRINQUEDO"></option>
        <option key="higiene" value="HIGIENE"></option>
        <option key="uDomestico" value="UTENSÍLIO DOMÉSTICO"></option>
        <option key="vestuario" value="VESTUÁRIO"></option>
        <option key="outros" value="OUTROS"></option>
      </datalist>
      <Input
        type="number"
        id="quantidade"
        label="quantidade*"
        step="0.1"
        errors={errors.quantity?.message}
        placeholder="ex. 0.0"
        {...register("quantity")}
      />
      <Input
        id="tamanho"
        label="tamanho"
        errors={errors.size?.message}
        placeholder="ex.p"
        {...register("size")}
      />
      <Input
        id="medida"
        label="medida*"
        list="lista-medida"
        errors={errors.measure?.message}
        placeholder="ex. kg"
        {...register("measure")}
      />
      <datalist id="lista-medida">
        <option key="kg" value="KG"></option>
        <option key="lt" value="LT"></option>
        <option key="pc" value="PC"></option>
        <option key="un" value="UN"></option>
      </datalist>
      <Input
        id="doador"
        label="doador*"
        list="lista-doador"
        errors={errors.donator?.message}
        placeholder="Selecione o doador"
        {...register("donator")}
      />
      <datalist id="lista-doador">
        {donators.map((d, key) => (
          <>
            <option key={key} value={`${d.name} - ${d.phone}`}>
              {`${d.address} ${d.number} - ${d.city}, ${d.uf}`}
            </option>
          </>
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
        label="validade"
        errors={errors.validity?.message}
        {...register("validity")}
      />
      <div className={styles.buttonArea}>
        <Button type="submit" disabled={isSubmitting} variant="secondary">
          {isSubmitting ? <Loading /> : "Confirmar"}
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={() => printTag({ ...getValues() }, handleWasPrinted)}
        >
          Imprimir etiqueta
        </Button>
      </div>

      {submitError.error && (
        <ValidationError>{submitError.message}</ValidationError>
      )}
    </form>
  );
}
