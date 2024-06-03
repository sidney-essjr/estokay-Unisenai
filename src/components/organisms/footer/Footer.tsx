import ContactContainer from "../../molecules/contact/ContactContainer";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ContactContainer helpText="Presica de ajuda?" />
    </footer>
  );
}
