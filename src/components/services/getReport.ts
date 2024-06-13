import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { ReportI } from "../_molecules/forms/report-search/ReportSearchForm";
import { FormDonationRegistration } from "../helper/validations";

export async function getReport(report: ReportI) {
  const querySnapshot = await getDocs(collection(db, "report"));

  const reports: FormDonationRegistration[] = querySnapshot.docs.map((doc) => ({
    ...(doc.data().report as FormDonationRegistration),
  }));

  // logica de filtro

  report;
  return reports;
}
