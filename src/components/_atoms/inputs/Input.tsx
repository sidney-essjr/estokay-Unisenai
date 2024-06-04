import { ComponentPropsWithRef } from "react";
import styles from "./input.module.css";

type InputProps = ComponentPropsWithRef<"input"> & {
  id: string;
  label: string;
};

export default function Input({ id, label, ...rest }: InputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...rest} />
    </div>
  );
}
