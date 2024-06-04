import ContactGroup from "../../_molecules/contact/ContactGroup";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ContactGroup helpText="Presica de ajuda?" />
    </footer>
  );
}
