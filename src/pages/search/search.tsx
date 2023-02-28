import { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { usePagination } from '../../hooks/use-pagination';
import { Sort } from '../../components/sort/sort';
import { FilmCard } from '../../components/films/film-card';
import { Film } from '../../shared/types';
import genresList from '../../assets/genres.json';
import styles from './search.module.scss';
import {
  APPLY_GENRE_NAME,
  APPLY_MARK,
  APPLY_POPULARITY,
  setSearchParams,
} from '../../store/actions';
import { OutletContextType } from '../../router/outlet-context-type';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../store/reducers/state-types';
import { POPULARITY, VOTE } from '../../shared/filters/filters-const';

const currentGenresList = genresList.map((item) => item.name);
const filmMarkList = Object.values(VOTE);
const popularityList = Object.values(POPULARITY);
const initialState = 'Выбрать';
const filmsPerPage = 1;

const Search = () => {
  const [isWarning, setIsWarning] = useState(false);
  const dispatch = useDispatch();
  const currentStore = useSelector(
    (state: ReduxState) => state.applySearchParams
  );
  const { pages, currentPage, setCurrentPage, currentFilms } = usePagination(
    filmsPerPage,
    currentStore.currentFilmsList
  );
  const filmId = currentStore.currentFilmsList[currentPage - 1]?.id;
  const { changeSortType } = useOutletContext<OutletContextType>();
  console.log(currentStore);

  const applyFilters = () => {
    if (
      currentStore.filmMark !== initialState &&
      currentStore.popularity !== initialState &&
      currentStore.genreName !== initialState
    ) {
      dispatch(
        setSearchParams({
          filmMark: currentStore.filmMark,
          popularity: currentStore.popularity,
          genreName: currentStore.genreName,
        })
      );
    } else {
      setIsWarning(true);
      setTimeout(() => setIsWarning(false), 3000);
    }
  };

  const filmTurns = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage <= pages) {
      dispatch(
        setSearchParams({
          filmMark: initialState,
          popularity: initialState,
          genreName: initialState,
        })
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchForm}>
        <h2 className={styles.title}>Выбрать фильм</h2>
        <Sort
          title={'Жанр'}
          sortList={currentGenresList}
          sortItem={currentStore.genreName}
          sortType={APPLY_GENRE_NAME}
          rateFilms={changeSortType}
        />
        <Sort
          title={'Оценка фильма'}
          sortList={filmMarkList}
          sortItem={currentStore.filmMark}
          sortType={APPLY_MARK}
          rateFilms={changeSortType}
        />
        <Sort
          title={'По популярности'}
          sortList={popularityList}
          sortItem={currentStore.popularity}
          sortType={APPLY_POPULARITY}
          rateFilms={changeSortType}
        />
        {isWarning && <p className={styles.warning}>Выберите все опции!</p>}
        <button className={styles.button} onClick={applyFilters}>
          Выбрать
        </button>
      </div>
      <div className={styles.filmsContainer}>
        <div>
          <div className={styles.film}>
            {currentPage > pages ? (
              <div className={styles.emptyContainer}>
                <p>Фильмы закончились</p>
                <span>😕</span>
              </div>
            ) : (
              currentFilms.map(
                ({
                  id,
                  title,
                  vote_average,
                  release_date,
                  poster_path,
                }: Film) => (
                  <FilmCard
                    key={id}
                    id={id}
                    title={title}
                    rating={vote_average}
                    year={release_date}
                    poster={poster_path}
                  />
                )
              )
            )}
          </div>
          {currentPage <= pages && (
            <div className={styles.pagination}>
              <button
                className={styles.button}
                disabled={currentPage > pages ? true : false}
                onClick={filmTurns}
              >
                Не подходит
              </button>
              <Link className={styles.button} to={`/film/${filmId}`}>
                Подходит
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Search };
