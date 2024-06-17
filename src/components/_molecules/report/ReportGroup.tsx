import { useEffect, useState } from "react";
import { filterReport } from "../../helper/filterReport";
import { FormDonationRegistration } from "../../helper/validations";
import { getDonations } from "../../services/getDonations";
import ReportSearchForm, {
  ReportI,
} from "../forms/report-search/ReportSearchForm";
import Pagination from "../pagination/Pagination";
import styles from "./reportGroup.module.css";
import ReportTable from "./ReportTable";

export default function ReportGroup() {
  const [reportSearch, setReportSearch] = useState<ReportI | null>(null);
  const [reportQueryResult, setReportQueryResult] = useState<
    FormDonationRegistration[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);
  const [numberOfPages, setNumbersOfPages] = useState<number>(0);

  function handleNumbersOfPages(pages: number) {
    if (pages === 0) {
      setNumbersOfPages(0);
    } else if (pages < 1) {
      setNumbersOfPages(1);
    } else {
      setNumbersOfPages(pages);
    }
  }

  useEffect(() => {
    async function handleReportResult() {
      setIsSearching(true);
      const { data } = await getDonations();
      if (reportSearch && data) {
        const filteredReport = filterReport(reportSearch, data);
        setReportQueryResult(filteredReport);
        handleNumbersOfPages(filteredReport.length / 10);
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
      <Pagination
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
