import { ComponentPropsWithRef, PropsWithChildren } from "react";
import styles from "./button.module.css";

type ButtonProps = PropsWithChildren &
  ComponentPropsWithRef<"button"> & {
    variant?: "primary" | "secondary";
  };

export default function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <button
      className={`${styles.default} ${
        variant === "secondary" ? styles.secondary : styles.primary
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
