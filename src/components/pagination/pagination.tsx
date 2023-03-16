import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OutletContextType } from '../../router/outlet-context-type';
import { startPage } from '../../hooks/use-pagination';
import styles from './pagination.module.scss';

interface PaginationProps {
  pages: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

const Pagination = ({
  pages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const { currentList } = useOutletContext<OutletContextType>();

  useEffect(() => {
    if (currentPage > pages) {
      setCurrentPage(startPage);
    }
  }, [currentList]);

  const paginate = (number: number) => {
    if (number > pages) return;
    if (number < startPage) return;
    setCurrentPage(number);
  };

  const isPrev = currentPage <= startPage ? true : false;
  const isNext = currentPage >= pages ? true : false;

  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.button}
          disabled={isPrev}
          onClick={() => paginate(currentPage - 1)}
        >
          Назад
        </button>
        <button
          className={styles.button}
          disabled={isNext}
          onClick={() => paginate(currentPage + 1)}
        >
          Вперед
        </button>
      </div>
      <div className={styles.text}>
        {currentPage} из {pages ? pages : startPage}
      </div>
    </>
  );
};

export { Pagination };
export type { PaginationProps };
