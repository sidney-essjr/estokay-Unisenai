import { useEffect } from "react";
import styles from "./alert.module.css";

type AlertProps = {
  isOpen: boolean;
  onClose: () => void;
  time: number;
  log: string;
  icon: JSX.Element;
};

export default function Alert({
  isOpen,
  onClose,
  time,
  log,
  icon,
}: AlertProps) {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.log}>{log}</div>
      </div>
    </aside>
  );
}
