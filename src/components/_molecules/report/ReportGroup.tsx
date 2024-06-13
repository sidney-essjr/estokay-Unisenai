import { useEffect, useState } from "react";
import { FormDonationRegistration } from "../../helper/validations";
import { getReport } from "../../services/getReport";
import ReportSearchForm, {
  ReportI,
} from "../forms/report-search/ReportSearchForm";
import styles from "./reportGroup.module.css";
import ReportTable from "./ReportTable";

export default function ReportGroup() {
  const [reportSearch, setReportSearch] = useState<ReportI | null>(null);
  const [reportQueryResult, setReportQueryResult] = useState<
    FormDonationRegistration[]
  >([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    async function handleReportResult() {
      if (reportSearch) {
        setIsSearching(true);
        const reportResult: FormDonationRegistration[] = await getReport(
          reportSearch
        );
        setReportQueryResult(reportResult);
        setIsSearching(false);
      }
    }
    handleReportResult();
  }, [reportSearch]);

  return (
    <div className={styles.container}>
      <ReportSearchForm
        reportSearch={setReportSearch}
        isSearching={isSearching}
      />
      <ReportTable reportQueryResult={reportQueryResult} />
    </div>
  );
}
