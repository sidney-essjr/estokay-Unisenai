import { ReportI } from "../_molecules/forms/report-search/ReportSearchForm";
import { FormDonationRegistration } from "./validations";

export function filterReport(
  reportFilter: ReportI,
  reports: FormDonationRegistration[]
) {
  const filteredReport = reports.filter((r) => {
    let item: boolean = true,
      tipo: boolean = true,
      tamanho: boolean = true,
      validade: boolean = true;

    if (reportFilter.item) {
      item = r.item.includes(reportFilter.item);
    }
    if (reportFilter.tipo) {
      tipo = r.type === reportFilter.tipo;
    }
    if (reportFilter.tamanho && r.size) {
      tamanho = r.size.includes(reportFilter.tamanho);
    }
    if (reportFilter.validade && r.validity) {
      const searchedValidity = new Date(Date.parse(reportFilter.validade));
      const storedValidity = new Date(Date.parse(r.validity));

      validade = storedValidity <= searchedValidity;
    }
    return item && tamanho && tipo && validade;
  });

  return filteredReport;
}
