import { FilmCard } from './FilmCard';
import styles from './Films.module.scss';
import films from '../../assets/films.json'

type Props = {};

const Films = (props: Props) => {
  return (
    <section className={styles.container}>
      {films.map(({id, title, vote_average, release_date}) => (
        <FilmCard key={id} title={title} rating = {vote_average} year ={release_date} />
      ))}
      
    </section>
  );
};

export { Films };
