import { ReactNode } from "react";
import styles from "./erros.module.css";

export default function ValidationError({ children }: { children: ReactNode }) {
  return <div className={styles.validationError}>{children}</div>;
}
