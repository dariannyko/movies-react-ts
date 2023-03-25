import { useOutletContext, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  APPLY_RATING,
  APPLY_YEAR,
  APPLY_GENRES,
  APPLY_FAVORITES,
} from '../../store/actions';
import { Button } from '../button/button';
import { CheckboxFrom } from '../checkbox-form/checkbox-form';
import { Pagination } from '../pagination/pagination';
import { Sort } from '../sort/sort';
import { OutletContextType } from '../../router/outlet-context-type';
import { StoreState } from '../../store/state-types';
import genresList from '../../assets/genres.json';
import emoji from '../../assets/img/magnifier-icon.svg';
import styles from './filters.module.scss';
import { favoriteList, sortList, yearList } from '../../shared/const';

interface FiltersProps {
  pages: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

const Filters = ({ pages, currentPage, setCurrentPage }: FiltersProps) => {
  const { changeFavoritesType, resetFilters, changeSortType } =
    useOutletContext<OutletContextType>();
  const currentStore = useSelector((state: StoreState) => state.applyFilters);

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
          <p>Что посмотреть?</p>
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
export type { FiltersProps };
