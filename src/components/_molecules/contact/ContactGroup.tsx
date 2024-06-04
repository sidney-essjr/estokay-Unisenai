import CallIcon from "../../../assets/svg/CallIcon";
import MailIcon from "../../../assets/svg/MailIcon";
import WhatsIcon from "../../../assets/svg/WhatsIcon";
import ContactBox from "../../_atoms/box/contact/ContactBox";
import styles from "./contactGroup.module.css";

export default function ContactGroup({ helpText }: { helpText: string }) {
  return (
    <div className={styles.content}>
      <p>{helpText}</p>
      <ContactBox contactText="(48) 99999-9999">
        <WhatsIcon />
      </ContactBox>
      <ContactBox contactText="(48) 55555-5555">
        <CallIcon />
      </ContactBox>
      <ContactBox contactText="suporte@estokay.com.br">
        <MailIcon />
      </ContactBox>
    </div>
  );
}
