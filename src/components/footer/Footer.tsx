import CallIcon from "../svg/CallIcon";
import MailIcon from "../svg/MailIcon";
import WhatsIcon from "../svg/WhatsIcon";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>Precisa de ajuda?</p>
        <div className={styles.contact}>
          <WhatsIcon /> <p>(48) 99999-9999</p>
        </div>
        <div className={styles.contact}>
          <CallIcon />
          <p>(48) 55555-5555</p>
        </div>
        <div className={styles.contact}>
          <MailIcon />
          <p>suporte@estokay.com.br</p>
        </div>
      </div>
    </footer>
  );
}
