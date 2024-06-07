import { ReactNode } from "react";
import Button from "../../_atoms/buttons/Button";
import Title from "../../_atoms/text/home/Title";
import styles from "./modal.module.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Title>{title}</Title>
          <Button onClick={onClose}>&times;</Button>
        </div>
        <div className={styles.contentInfo}>
          <div className={styles.info}>{children}</div>
        </div>
      </div>
    </section>
  );
}
