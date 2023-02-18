import { useOutletContext } from 'react-router-dom';
import { FilmCard } from './film-card';
import { Loader } from '../loader/loader';
import { ContextType } from '../../App';
import { Film } from '../../assets/shared/types';
import styles from './films.module.scss';

const loader = [...new Array(10)];

type Props = {
  currentFilms: Film[];
};

const Films = ({ currentFilms }: Props) => {
  const { isLoading } = useOutletContext<ContextType>();

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
