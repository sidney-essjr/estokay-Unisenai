import {
  ComponentPropsWithRef,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react";
import styles from "./checkbox.module.css";
import ValidationError from "../../helper/erros/ValidationError";

type CheckboxProps = ComponentPropsWithRef<"input"> & {
  id: string;
  label: ReactNode;
  errors: string | undefined;
};

const Checkbox = forwardRef(
  (
    { id, label, errors, ...rest }: CheckboxProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.container}>
        <ValidationError>{errors}</ValidationError>
        <div className={styles.content}>
          <input id={id} type="checkbox" {...rest} />
          <label>{label}</label>
        </div>
      </div>
    );
  }
);

export default Checkbox;
