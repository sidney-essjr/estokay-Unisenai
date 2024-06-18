import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../assets/svg/Loading";
import Button from "../../../_atoms/buttons/Button";
import Checkbox from "../../../_atoms/inputs/Checkbox";
import Input from "../../../_atoms/inputs/Input";
import ValidationError from "../../../helper/erros/ValidationError";
import { deleteDonation } from "../../../services/deleteDonation";
import { DonationI } from "../../../services/getDonations";
import { updateStock } from "../../../services/updateStock";
import styles from "./itemDeliveredForm.module.css";

export default function ItemDeliveredForm({
  donation,
  updated,
  openAlert,
  handleLog,
}: {
  donation: DonationI;
  updated: () => void;
  openAlert: () => void;
  handleLog: (log: string) => void;
}) {
  const [quantity, setQuantity] = useState(0);
  const [isClearStock, setIsClearStock] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [submitError, setSubmitError] = useState({ error: false, message: "" });

  const navigate = useNavigate();

  function resetForm() {
    setIsClearStock(false);
    setQuantity(0);
  }

  function clearStock() {
    deleteDonation(donation.id);
    handleLog("Item removido do estoque!");
    setTimeout(() => {
      navigate("/report");
    }, 2500);
    openAlert();
  }

  function updateItem() {
    updateStock(donation, Number(donation.quantity) - quantity);
    handleLog("Quantidade atualizada!");
    openAlert();
    updated();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmiting(true);
    try {
      quantity === Number(donation.quantity) || isClearStock
        ? clearStock()
        : updateItem();
      resetForm();
    } catch (error) {
      if (error instanceof Error)
        setSubmitError({ error: true, message: error.message });
    }
    setIsSubmiting(false);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Input
        id="quantidade"
        label="Itens entregues"
        type="number"
        value={quantity}
        min={0}
        max={Number(donation.quantity)}
        onChange={(e) => setQuantity(Number(e.currentTarget.value))}
      />
      <Checkbox
        id="zerarEstoque"
        label="Zerar quantidade em estoque"
        value={String(isClearStock)}
        onClick={() => setIsClearStock(!isClearStock)}
      />

      <Button disabled={isSubmiting} variant="secondary">
        {isSubmiting ? <Loading /> : "registrar"}
      </Button>

      {submitError.error && (
        <ValidationError>{submitError.message}</ValidationError>
      )}
    </form>
  );
}
