import { DonationI } from "../../services/getDonations";
import styles from "./itemDeliveredDisplay.module.css"

export default function ItemDeliveredDisplay({
  donation,
}: {
  donation: DonationI;
}) {
  return (
    <section className={styles.container}>
      <div>
        <div>
          <p>Item</p>
          <p>{donation?.item}</p>
        </div>
        <div>
          <p>Tipo</p>
          <p>{donation?.type}</p>
        </div>
        <div>
          <p>Tamanho</p>
          <p>{donation?.size ? donation.size : "N/A"}</p>
        </div>
        <div>
          <p>Data Entrada</p>
          <p>{donation?.entryDate}</p>
        </div>
        <div>
          <p>Validade</p>
          <p>{donation.validity ? donation.validity : "N/A"}</p>
        </div>
        <div>
          <p>Quantidade</p>
          <p>{donation?.quantity}</p>
        </div>
        <div>
          <p>Doador</p>
          <p>{donation?.donator}</p>
        </div>
      </div>
    </section>
  );
}
