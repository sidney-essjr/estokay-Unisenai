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
          <th>Validade</th>
          <th>Data Entrada</th>
          <th>Doador</th>
        </tr>
      </thead>
      {reportQueryResult.map((donation) => (
        <tbody>
          <tr>
            <td>{donation.item}</td>
            <td>{donation.type}</td>
            <td>{donation.quantity}</td>
            <td>{donation.measure}</td>
            <td>{donation.size}</td>
            <td>{convertDate(donation.validity)}</td>
            <td>{convertDate(donation.entryDate)}</td>
            <td>{donation.donator}</td>
            <td>{}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
