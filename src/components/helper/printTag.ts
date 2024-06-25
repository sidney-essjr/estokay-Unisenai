import { convertDate } from "./convertDate";
import { FormDonationRegistration } from "./validations";

export default function printTag(
  { donator, quantity, entryDate, validity }: FormDonationRegistration,
  handleWasPrinted?: () => void
) {
  const lablePrint = `
    <section>
      <p><b>Doador:</b> ${donator}</p>
      <p><b>Quantidade:</b> ${quantity}</p>
      <p><b>Entrada:</b> ${convertDate(entryDate)}</p>
      <p><b>Validade:</b> ${validity ? convertDate(validity) : "N/A"}</p>
    </section>
  `;

  const printWindow = window.open("", "Janela de impressão");
  if (printWindow) {
    printWindow.document.write(lablePrint);
    printWindow.print();
    if (handleWasPrinted) handleWasPrinted();
    printWindow.close();
  }
}
