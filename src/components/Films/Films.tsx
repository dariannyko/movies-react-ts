import { FilmCard } from './FilmCard';
import styles from './Films.module.scss';
import { Film } from '../../assets/shared/Types';
import { Loader } from '../Loader/Loader';

const loader = [...new Array(10)];

type Props = {
  currentFilms: Film[];
  isLoading: boolean;
};

const Films = ({ currentFilms, isLoading }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.filmsWrapper}>
      {isLoading
        ? loader.map((item, index) => <Loader key={index} />)
        : currentFilms.map(
            ({ id, title, vote_average, release_date, poster_path }) => (
              <FilmCard
                key={id}
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
