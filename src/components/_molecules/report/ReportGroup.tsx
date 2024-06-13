import styles from "./reportGroup.module.css";
import ReportSearchForm from "../forms/report-search/ReportSearchForm";
import ReportTable from "./ReportTable";

export default function ReportGroup() {
  return (
    <div className={styles.container}>
      <ReportSearchForm />
      <ReportTable />
    </div>
  );
}
