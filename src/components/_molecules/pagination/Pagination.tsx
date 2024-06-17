import { Dispatch, useEffect, useMemo, useState } from "react";
import PagingButton from "../../_atoms/buttons/PagingButton";
import styles from "./pagination.module.css";

export default function Pagination({
  numberOfPages,
  currentPage,
  setCurrentPage,
}: {
  numberOfPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
}) {
  const pages = useMemo(() => {
    return numberOfPages >= 1 ? [...Array(numberOfPages).keys()] : [];
  }, [numberOfPages]);
  const [isFirstPage, setIsFirstPage] = useState<boolean>();
  const [isLastPage, setIsLastPage] = useState<boolean>();

  useEffect(() => {});

  useEffect(() => {
    currentPage === 1 ? setIsFirstPage(true) : setIsFirstPage(false);
    currentPage === pages.length ? setIsLastPage(true) : setIsLastPage(false);
  }, [currentPage, pages]);

  function handlePrevPage() {
    if (!isFirstPage) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className={styles.container}>
      <button type="button" disabled={isFirstPage} onClick={handlePrevPage}>
        {"Prev <"}
      </button>
      <ul className={styles.content}>
        {numberOfPages !== 0
          ? pages.map((p, key) => (
              <PagingButton
                className={
                  p + 1 === currentPage ? styles.selected : styles.default
                }
                key={key}
                value={p + 1}
                onClick={(e) => setCurrentPage(e.currentTarget.value)}
              >
                {p + 1}
              </PagingButton>
            ))
          : "..."}
      </ul>
      <button disabled={isLastPage} type="button" onClick={handleNextPage}>
        {"> Next"}
      </button>
    </div>
  );
}
