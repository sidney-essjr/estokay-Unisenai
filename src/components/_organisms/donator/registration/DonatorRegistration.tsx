import { useState } from "react";
import CheckIcon from "../../../../assets/svg/CheckIcon";
import Title from "../../../_atoms/text/home/Title";
import DonatorRegistrationForm from "../../../_molecules/forms/donator-registration/DonatorRegistrationForm";
import Alert from "../../../helper/feedback/Alert";
import styles from "./donatorRegistration.module.css";

export default function DonatorRegistration() {
  const [showAlert, setShowAlert] = useState(false);

  const handleOpenAlert = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);

  return (
    <section className={styles.container}>
      <Title>Cadastro Doador</Title>
      <DonatorRegistrationForm openAlert={handleOpenAlert} />

      <Alert
        icon={<CheckIcon />}
        isOpen={showAlert}
        onClose={handleCloseAlert}
        time={3000}
        log="Doador cadastrado com sucesso!"
      />
    </section>
  );
}
