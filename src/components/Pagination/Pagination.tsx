import styles from './Pagination.module.scss';
import films from '../../assets/films.json';

const startPage = 1;

type Props = {
  filmsPerPage: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

const Pagination = ({ filmsPerPage, currentPage, setCurrentPage }: Props) => {
  const pages = Math.ceil(films.length / filmsPerPage);
  const paginate = (number: number) => {
    if (number > pages) return;
    if (number < startPage) return;
    setCurrentPage(number);
  };
  

  return (
    <>
      <div className={styles.container}>
        <button className={`${styles.button} ${currentPage <= startPage ? styles.disabled : ''}`} onClick={() => paginate(currentPage-1)}>Назад</button>
        <button className={`${styles.button} ${currentPage >= pages ? styles.disabled : ''}`} onClick={() => paginate(currentPage+1)}>Вперед</button>
      </div>
      <div className={styles.text}>
        {currentPage} из {pages}
      </div>
    </>
  );
};

export { Pagination };
