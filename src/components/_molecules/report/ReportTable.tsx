import { Link } from "react-router-dom";
import DeliveredIcon from "../../../assets/svg/DeliveredIcon";
import PrintIcon from "../../../assets/svg/PrintIcon";
import { convertDate } from "../../helper/convertDate";
import printTag from "../../helper/printTag";
import { DonationI } from "../../services/getDonations";
import styles from "./reportTable.module.css";

export default function ReportTable({
  reportQueryResult,
}: {
  reportQueryResult: DonationI[];
}) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Baixa</th>
          <th>Item</th>
          <th>Tipo</th>
          <th>Qtd.</th>
          <th>Unid. Medida</th>
          <th>Tamanho</th>
          <th>Data Entrada</th>
          <th>Validade</th>
          <th>Doador</th>
          <th>Etiqueta</th>
        </tr>
      </thead>
      {reportQueryResult.map((donation, key) => (
        <tbody>
          <tr key={key}>
            <td>
              <Link to={`/report/delivered/${donation.id}`}>
                <DeliveredIcon />
              </Link>
            </td>
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
            <td onClick={() => printTag({ ...donation })}>
              <PrintIcon />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
