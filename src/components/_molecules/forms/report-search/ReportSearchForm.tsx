import { FormEvent, useState } from "react";
import Loading from "../../../../assets/svg/Loading";
import Button from "../../../_atoms/buttons/Button";
import Input from "../../../_atoms/inputs/Input";
import styles from "./reportSearchForm.module.css";

export type ReportI = {
  item: string;
  tipo: string;
  tamanho: string;
  validade: string;
};

export default function ReportSearchForm({
  reportSearch,
  isSearching,
}: {
  reportSearch: (report: ReportI) => void;
  isSearching: boolean;
}) {
  const [report, setReport] = useState<ReportI>({
    item: "",
    tipo: "",
    tamanho: "",
    validade: "",
  });

  function handleReport(event: HTMLInputElement) {
    setReport((prev) => {
      return {
        ...prev,
        [event.name]: event.value,
      };
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    reportSearch(report);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        id="item"
        label="item"
        onChange={({ target }) => handleReport(target)}
      />
      <Input
        id="tipo"
        label="tipo"
        onChange={({ target }) => handleReport(target)}
      />
      {/* <Input
        id="quantidade"
        label="quantidade"
        type="number"
        onChange={({ target }) => handleReport(target)}
      /> */}
      <Input
        id="tamanho"
        label="tamanho"
        onChange={({ target }) => handleReport(target)}
      />
      <Input
        id="validade"
        label="validade"
        type="date"
        onChange={({ target }) => handleReport(target)}
      />
      {/* <Input
        id="limite"
        label="limite"
        type="number"
        onChange={({ target }) => handleReport(target)}
      /> */}
      <Button disabled={isSearching} variant="secondary">
        {isSearching ? <Loading /> : "gerar relatório"}
      </Button>
    </form>
  );
}
