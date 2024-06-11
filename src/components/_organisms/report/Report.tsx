import Title from "../../_atoms/text/home/Title";
import ReportGroup from "../../_molecules/report/ReportGroup";
import styles from "./report.module.css";

export default function Report() {
  return (
    <section className={styles.container}>
      <Title>Relatórios</Title>
      <ReportGroup />
    </section>
  );
}
