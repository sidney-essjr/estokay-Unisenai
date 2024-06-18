import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckIcon from "../../../assets/svg/CheckIcon";
import Loading from "../../../assets/svg/Loading";
import Title from "../../_atoms/text/home/Title";
import ItemDeliveredForm from "../../_molecules/forms/item-delivered/ItemDeliveredForm";
import ItemDeliveredDisplay from "../../_molecules/item-delivered/ItemDeliveredDisplay";
import Alert from "../../helper/feedback/Alert";
import { getDonation } from "../../services/getDonation";
import { DonationI } from "../../services/getDonations";
import styles from "./itemDeliveredGroup.module.css";

export default function ItemDeliveredGroup() {
  const [donation, setDonation] = useState<DonationI>();
  const [updated, setUpdated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [log, setLog] = useState("");

  const handleOpenAlert = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);
  const { id } = useParams();

  const handleUpdated = () => setUpdated(!updated);

  async function getDonationInfo() {
    if (id) {
      const result = await getDonation(id);
      if (result?.data) setDonation(result.data);
    }
    setUpdated(false);
  }
  useEffect(() => {
    getDonationInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updated]);

  return (
    <section className={styles.container}>
      <Title>Baixa de Items</Title>
      {donation ? (
        <>
          <ItemDeliveredDisplay donation={donation} />
          <p className={styles.subtitle}>Selecione a quantidade a ser baixada</p>
          <ItemDeliveredForm
            donation={donation}
            updated={handleUpdated}
            openAlert={handleOpenAlert}
            handleLog={setLog}
          />
        </>
      ) : (
        <Loading />
      )}

      <Alert
        icon={<CheckIcon />}
        isOpen={showAlert}
        onClose={handleCloseAlert}
        time={3000}
        log={log}
      />
    </section>
  );
}
