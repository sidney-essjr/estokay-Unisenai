import { ComponentPropsWithRef, ReactNode } from "react";
import styles from "./pagingButton.module.css";

type PaginationButton = ComponentPropsWithRef<"li"> & {
  value?: number;
  children: ReactNode;
};

export default function PagingButton({
  children,
  value,
  ...rest
}: PaginationButton) {
  return (
    <li className={styles.container} {...rest} value={value}>
      {children}
    </li>
  );
}
