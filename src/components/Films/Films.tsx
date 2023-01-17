import { FilmCard } from './FilmCard';
import styles from './Films.module.scss';

type Props = {};

const Films = (props: Props) => {
  return (
    <section className={styles.container}>
      <FilmCard/>
    </section>
  );
};

export { Films };
