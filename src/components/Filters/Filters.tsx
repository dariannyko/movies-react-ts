import { Button } from '../Button/Button';
import { CheckboxFrom } from '../CheckboxForm/CheckboxFrom';
import { Pagination } from '../Pagination/Pagination';
import { Sort } from '../Sort/Sort';
import styles from './Filters.module.scss';

type Props = {
  filmsPerPage: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  rating: string;
  yearSort: string;
  rateFilms: (value: string) => void;
  sortYearFilms: (value: string) => void;
  setRating: (value: string) => void;
};

const sortList = [
  'Популярные по убыванию',
  'Популярные по возрастанию',
  'Рейтинг по убыванию',
  'Рейтинг по возрастанию',
];
const yearList = ['all', '2020', '2019', '2018', '2017'];

const Filters = ({
  filmsPerPage,
  currentPage,
  setCurrentPage,

  rating,
  yearSort,
  setRating,
  setYearSort,
  setGenres,
  genres,

  rateFilms,
  sortYearFilms,
  applyFilters,
  sortGenresFilms,
  
}: Props) => {
  return (
    <aside className={styles.container}>
      <h1 className={styles.title}>Фильтры</h1>
      <div className={styles.filtersButton}>
        <Button children={'Сбросить все фильтры'} />
      </div>
      <Sort
        title={'Сортировать по'}
        sortList={sortList}
        sortItem={rating}
        setSort = {setRating}
        rateFilms = {rateFilms}
      />
      <Sort
        title={'Год релиза'}
        sortList={yearList}
        sortItem={yearSort}
        setSort = {setYearSort}
        rateFilms = {sortYearFilms}
      />
      <CheckboxFrom setGenres={setGenres} genres={genres} sortGenresFilms={sortGenresFilms}/>
      <Pagination
        filmsPerPage={filmsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </aside>
  );
};

export { Filters };
