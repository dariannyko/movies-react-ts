import { useOutletContext } from 'react-router-dom';
import { FilmCard } from './film-card';
import { Loader } from '../loader/loader';
import { OutletContextType } from '../../router/outlet-context-type';
import { Film } from '../../shared/types';
import styles from './films.module.scss';

const loader = [...new Array(10)];

interface FilmsProps {
  currentFilms: Film[];
}

const Films = ({ currentFilms }: FilmsProps) => {
  const { isLoading } = useOutletContext<OutletContextType>();

  return (
    <section className={styles.container}>
      <div className={styles.filmsWrapper}>
        {isLoading
          ? loader.map((item, index) => <Loader key={index} />)
          : currentFilms.map(
              ({ id, title, vote_average, release_date, poster_path }) => (
                <FilmCard
                  key={id}
                  id={id}
                  title={title}
                  rating={vote_average}
                  year={release_date}
                  poster={poster_path}
                />
              )
            )}
      </div>
    </section>
  );
};

export { Films };
export type { FilmsProps };
