import Loading from "../../../../assets/svg/Loading";
import Button from "../../../_atoms/buttons/Button";
import Input from "../../../_atoms/inputs/Input";
import styles from "./reportSearchForm.module.css";

export default function ReportSearchForm() {
  return (
    <form className={styles.form}>
      <Input
        id="item"
        label="item"
        errors=""
      />
      <Input
        id="tipo"
        label="tipo"
        errors=""
      />
      <Input
        id="quantidade"
        label="quantidade"
        errors=""
        type="number"
      />
      <Input
        id="tamanho"
        label="tamanho"
        errors=""
      />
      <Input
        id="validade"
        label="validade"
        errors=""
        type="date"
      />
      <Input
        id="limite"
        label="limite"
        errors=""
        type="number"
      />
      <Button disabled={false} variant="secondary">
        {false ? <Loading /> : "Gerar Relatório"}
      </Button>
    </form>
  );
}
