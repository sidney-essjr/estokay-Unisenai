import { useEffect, useState } from "react";
import { filterReport } from "../../helper/filterReport";
import { FormDonationRegistration } from "../../helper/validations";
import { getDonations } from "../../services/getDonations";
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
      setIsSearching(true);
      const { data } = await getDonations();
      if (reportSearch && data) {
        const filteredReport = filterReport(reportSearch, data);
        setReportQueryResult(filteredReport);
      }
      setIsSearching(false);
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
