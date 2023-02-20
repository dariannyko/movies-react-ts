import { useOutletContext, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReduxState } from '../../store/reducers';
import {
  APPLY_RATING,
  APPLY_YEAR,
  APPLY_GENRES,
  APPLY_FAVORITES,
} from '../../store/actions';
import { Button } from '../_button/_button';
import { CheckboxFrom } from '../checkbox-form/checkbox-form';
import { Pagination } from '../_pagination/_pagination';
import { Sort } from '../_sort/_sort';
import { ContextType } from '../../App';
import genresList from '../../assets/genres.json';
import emoji from '../../assets/img/magnifier-icon.svg';
import styles from './filters.module.scss';

const sortList = [
  'Популярные по убыванию',
  'Популярные по возрастанию',
  'Рейтинг по убыванию',
  'Рейтинг по возрастанию',
];
const yearList = ['Показать все', '2020', '2019', '2018', '2017'];
const favoriteList = ['none', 'Избранное', 'Смотреть позже'];

type Props = {
  pages: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

const Filters = ({ pages, currentPage, setCurrentPage }: Props) => {
  const { changeFavoritesType, resetFilters, changeSortType } =
    useOutletContext<ContextType>();
  const currentStore = useSelector((state: ReduxState) => state.applyFilters);

  return (
    <aside className={styles.container}>
      <h1 className={styles.title}>Фильтры</h1>
      <div className={styles.filtersButton}>
        <Button children={'Сбросить все фильтры'} onClick={resetFilters} />
      </div>
      <Sort
        title={'Сортировать по'}
        sortList={sortList}
        sortItem={currentStore.sortBy}
        sortType={APPLY_RATING}
        rateFilms={changeSortType}
      />
      <Sort
        title={'Год релиза'}
        sortList={yearList}
        sortItem={currentStore.year}
        sortType={APPLY_YEAR}
        rateFilms={changeSortType}
      />
      <CheckboxFrom
        genresList={genresList}
        genres={currentStore.genres}
        sortType={APPLY_GENRES}
        changeGenres={changeSortType}
      />
      <Sort
        title={'Избранное'}
        sortList={favoriteList}
        sortItem={currentStore.favorites}
        sortType={APPLY_FAVORITES}
        rateFilms={changeFavoritesType}
      />
      <Link to={`/search`}>
        <div className={styles.searchFilm}>
          <img src={emoji} alt="Эмоджи" />
          <p>Не знаю, что посмотреть</p>
        </div>
      </Link>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </aside>
  );
};

export { Filters };