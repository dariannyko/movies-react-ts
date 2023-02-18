import { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { usePagination } from '../../hooks/use-pagination';
import { Sort } from '../../components/sort/sort';
import { FilmCard } from '../../components/films/film-card';
import { Film } from '../../assets/shared/types';
import {
  sortByGenres,
  VOTE,
  sortByVote,
  POPULARITY,
  sortByPopularity,
} from '../../assets/shared/filters';
import genresList from '../../assets/genres.json';
import filmList from '../../assets/films.json';
import { ContextType } from '../../App';
import styles from './search.module.scss';

const currentGenresList = genresList.map((item) => item.name);
const filmMarkList = Object.values(VOTE);
const popularityList = Object.values(POPULARITY);
const initialState = 'Выбрать';
const initialGenre = { id: 1, name: 'Выбрать' };

type Props = {};
const Search = (props: Props) => {
  const { setIsFilmDetails } = useOutletContext<ContextType>();
  const [currentGenreName, setCurrentGenreName] = useState<string>(
    initialGenre.name
  );
  const [filmMark, setFilmMark] = useState<string>(initialState);
  const [popularity, setPopularity] = useState<string>(initialState);
  const [currentFilmsList, setCurrentFilmsList] = useState<Film[]>([]);
  const [isWarning, setIsWarning] = useState(false);
  const filmsPerPage = 1;
  const [pages, currentPage, setCurrentPage, currentFilms] = usePagination(
    filmsPerPage,
    currentFilmsList
  );

  const applyFilters = () => {
    if (
      filmMark !== initialState &&
      popularity !== initialState &&
      currentGenreName !== initialGenre.name
    ) {
      let list = filmList;
      const genre = genresList.find((item) => item.name === currentGenreName);

      if (genre) {
        list = sortByGenres([genre.id], list);
      }
      list = sortByVote(filmMark, list);
      list = sortByPopularity(popularity, list);
      setCurrentFilmsList(list);
    } else {
      setIsWarning(true);
      setTimeout(() => setIsWarning(false), 3000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchForm}>
        <h2 className={styles.title}>Выбрать фильм</h2>
        <Sort
          title={'Жанр'}
          sortList={currentGenresList}
          sortItem={currentGenreName}
          sortType={setCurrentGenreName}
          rateFilms={null}
        />
        <Sort
          title={'Оценка фильма'}
          sortList={filmMarkList}
          sortItem={filmMark}
          sortType={setFilmMark}
          rateFilms={null}
        />
        <Sort
          title={'По популярности'}
          sortList={popularityList}
          sortItem={popularity}
          sortType={setPopularity}
          rateFilms={null}
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
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  if (currentPage <= pages) {
                    setCurrentGenreName(initialGenre.name);
                    setFilmMark(initialState);
                    setPopularity(initialState);
                  }
                }}
              >
                Не подходит
              </button>
              <Link
                className={styles.button}
                to={`/film/${currentFilmsList[currentPage - 1]?.id}`}
                onClick={() => setIsFilmDetails(true)}
              >
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
