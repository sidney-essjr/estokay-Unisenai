import { ReactNode } from "react";
import styles from "./subtitle.module.css";

export default function Subtitle({ children }: { children: ReactNode }) {
  return <h2 className={styles.subtitle}>{children}</h2>;
}
