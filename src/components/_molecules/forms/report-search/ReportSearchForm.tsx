import { FormEvent, useState } from "react";
import Loading from "../../../../assets/svg/Loading";
import Button from "../../../_atoms/buttons/Button";
import Input from "../../../_atoms/inputs/Input";
import styles from "./reportSearchForm.module.css";

export type ReportI = {
  item: string | null;
  tipo: string | null;
  tamanho: string | null;
  validade: string | null;
};

export default function ReportSearchForm({
  reportSearch,
  isSearching,
}: {
  reportSearch: (report: ReportI) => void;
  isSearching: boolean;
}) {
  const [report, setReport] = useState<ReportI>({
    item: null,
    tipo: null,
    tamanho: null,
    validade: null,
  });

  function handleReport(event: HTMLInputElement) {
    setReport((prev) => {
      return {
        ...prev,
        [event.name]: event.value.toUpperCase(),
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
        name="item"
        label="item"
        onChange={({ target }) => handleReport(target)}
      />
      <Input
        id="tipo"
        label="tipo"
        name="tipo"
        list="lista-tipo"
        onChange={({ target }) => handleReport(target)}
      />
      <datalist id="lista-tipo">
        <option key="alimento" value="ALIMENTO"></option>
        <option key="brinquedo" value="BRINQUEDO"></option>
        <option key="higiene" value="HIGIENE"></option>
        <option key="uDomestico" value="UTENSÍLIO DOMÉSTICO"></option>
        <option key="vestuario" value="VESTUÁRIO"></option>
        <option key="outros" value="OUTROS"></option>
      </datalist>
      {/* <Input
        id="quantidade"
        label="quantidade"
        type="number"
        onChange={({ target }) => handleReport(target)}
      /> */}
      <Input
        id="tamanho"
        name="tamanho"
        label="tamanho"
        onChange={({ target }) => handleReport(target)}
      />
      <Input
        id="validade"
        name="validade"
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
