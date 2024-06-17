import { convertDate } from "../../helper/convertDate";
import { FormDonationRegistration } from "../../helper/validations";
import styles from "./reportTable.module.css";

export default function ReportTable({
  reportQueryResult,
}: {
  reportQueryResult: FormDonationRegistration[];
}) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Item</th>
          <th>Tipo</th>
          <th>Qtd.</th>
          <th>Unid. Medida</th>
          <th>Tamanho</th>
          <th>Data Entrada</th>
          <th>Validade</th>
          <th>Doador</th>
        </tr>
      </thead>
      {reportQueryResult.map((donation, key) => (
        <tbody>
          <tr key={key}>
            <td>{donation.item}</td>
            <td>{donation.type}</td>
            <td>{donation.quantity}</td>
            <td>{donation.measure}</td>
            <td>{donation.size ? donation.size : "N/A"}</td>
            <td>{convertDate(donation.entryDate)}</td>
            <td>
              {donation.validity ? convertDate(donation.validity) : "N/A"}
            </td>
            <td>{donation.donator}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
