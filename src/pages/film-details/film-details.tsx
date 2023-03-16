import { useParams } from 'react-router-dom';
import filmsList from '../../assets/films.json';
import styles from './film-details.module.scss';

const imageUrl = 'https://image.tmdb.org/t/p/w500';

const FilmDetails = () => {
  let { filmId } = useParams();
  const film = filmsList.find((item) => `${item.id}` === filmId);

  return (
    <section className={styles.filmSection}>
      <div className={styles.container}>
        <div className={styles.fade}>
          <div className={styles.content}>
            <div className={styles.poster}>
              <img src={`${imageUrl}${film?.poster_path}`} alt="" />
            </div>
            <div className={styles.description}>
              <div className={styles.mainDescription}>
                <h2 className={styles.title}>{film?.title}</h2>
                <p className={styles.rating}>{film?.vote_average}</p>
                <p>{film?.overview}</p>
              </div>
              <ul className={styles.descriptionList}>
                <li className={styles.descriptionItem}>
                  <span>Статус</span>
                  <p>{film?.release_date ? 'Released' : '-'}</p>
                </li>
                <li className={styles.descriptionItem}>
                  <span>Дата выхода</span>
                  <p>{film?.release_date}</p>
                </li>
                <li className={styles.descriptionItem}>
                  <span>Язык оригинала</span>
                  <p>{film?.original_language}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.background}>
          <img
            className={styles.background}
            src={`${imageUrl}${film?.backdrop_path}`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export { FilmDetails };
