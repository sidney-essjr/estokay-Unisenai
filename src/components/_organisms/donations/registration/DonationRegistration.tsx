import { useEffect, useState } from "react";
import CheckIcon from "../../../../assets/svg/CheckIcon";
import Loading from "../../../../assets/svg/Loading";
import Title from "../../../_atoms/text/home/Title";
import DonationRegistrationForm from "../../../_molecules/forms/donation-registration/DonationRegistrationForm";
import Alert from "../../../helper/feedback/Alert";
import { DonatorsI, getDonators } from "../../../services/getDonators";
import styles from "./donationRegistration.module.css";

export default function DonationRegistration() {
  const [donators, setDonators] = useState<DonatorsI[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleOpenAlert = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);

  async function extractDonators() {
    const { data } = await getDonators();
    if (data) setDonators(data);
  }

  useEffect(() => {
    extractDonators();
  }, []);

  if (!donators) return <Loading />;

  return (
    <section className={styles.container}>
      <Title>Cadastro Doação</Title>
      <DonationRegistrationForm data={donators} openAlert={handleOpenAlert} />
      <Alert
        icon={<CheckIcon />}
        isOpen={showAlert}
        onClose={handleCloseAlert}
        time={3000}
        log="Doação cadastrada com sucesso!"
      />
    </section>
  );
}
