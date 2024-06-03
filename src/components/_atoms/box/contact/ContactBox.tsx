import { ReactNode } from "react";
import styles from "./contactBox.module.css";

export default function ContactBox({
  children,
  contactText,
}: {
  children: ReactNode;
  contactText: string;
}) {
  return (
    <div className={styles.contact}>
      {children}
      <p>{contactText}</p>
    </div>
  );
}
