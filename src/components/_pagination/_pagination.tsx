import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ContextType } from '../../App';
import styles from './pagination.module.scss';

const startPage = 1;

type Props = {
  pages: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

const Pagination = ({ pages, currentPage, setCurrentPage }: Props) => {
  const { currentList } = useOutletContext<ContextType>();

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

  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.button}
          disabled = {currentPage <= startPage ? true : false}
          onClick={() => paginate(currentPage - 1)}
        >
          Назад
        </button>
        <button
          className={styles.button}
          disabled = {currentPage >= pages ? true : false}
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
