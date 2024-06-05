import { ComponentPropsWithRef, ForwardedRef, forwardRef } from "react";
import ValidationError from "../../helper/erros/ValidationError";
import styles from "./input.module.css";

type InputProps = ComponentPropsWithRef<"input"> & {
  id?: string;
  label: string;
  errors: string | undefined;
};

const Input = forwardRef(
  (
    { id, label, errors, ...rest }: InputProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.container}>
        <div className={styles.info}>
          <label htmlFor={id}>{label}</label>
          <ValidationError>{errors}</ValidationError>
        </div>
        <input
          id={id}
          type="text"
          {...rest}
          onInput={(e) => e.currentTarget.setCustomValidity("")}
        />
      </div>
    );
  }
);

export default Input;
