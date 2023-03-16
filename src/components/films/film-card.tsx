import { Link } from 'react-router-dom';
import { Favorites } from '../favorites/favorites';
import styles from './film-card.module.scss';

const imageUrl = 'https://image.tmdb.org/t/p/w500';

interface FilmCardProps {
  id: number;
  title: string;
  rating: number;
  year: string;
  poster: string;
}

const favoritesList = [
  {
    image: (
      <svg
        enableBackground="new 0 0 32 32"
        id="Editable-line"
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="  M16.842,3.548l3.29,6.984c0.137,0.29,0.401,0.491,0.707,0.538l7.357,1.12c0.77,0.117,1.077,1.108,0.52,1.677l-5.324,5.436  c-0.221,0.226-0.322,0.551-0.27,0.87l1.257,7.676c0.131,0.803-0.673,1.416-1.362,1.036l-6.58-3.624c-0.273-0.151-0.6-0.151-0.873,0  l-6.58,3.624c-0.688,0.379-1.493-0.233-1.362-1.036l1.257-7.676c0.052-0.319-0.049-0.644-0.27-0.87l-5.324-5.436  c-0.557-0.569-0.25-1.56,0.52-1.677l7.357-1.12c0.306-0.047,0.57-0.248,0.707-0.538l3.29-6.984  C15.503,2.817,16.497,2.817,16.842,3.548z"
          fill="none"
          id="XMLID_16_"
          stroke="#898989"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2.5"
        />
      </svg>
    ),
    storageKey: 'favoritesFilms',
  },
  {
    image: (
      <svg
        width="17"
        height="22"
        viewBox="0 0 17 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.69639 17.6316L2.32379 20.881C1.89483 21.1271 1.36636 20.9529 1.12988 20.4874V20.4874C1.06146 20.3432 1.02455 20.1834 1.02209 20.0206V5.62242C1.02209 2.87643 2.72176 1.77803 5.16762 1.77803H10.9133C13.2846 1.77803 15.0588 2.8032 15.0588 5.43936V20.0206C15.0588 20.2803 14.9654 20.5295 14.799 20.7131C14.6326 20.8968 14.407 21 14.1717 21C14.0216 20.9974 13.8741 20.9567 13.7406 20.881L8.3348 17.6316C8.1356 17.5128 7.89559 17.5128 7.69639 17.6316Z"
          stroke="#898989"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    storageKey: 'watchLater',
  },
];

const FilmCard = ({ title, rating, year, poster, id }: FilmCardProps) => {
  return (
    <div className={styles.filmCard}>
      <div className={styles.filmContainer}>
        <div className={styles.wrapper}>
          <div className={styles.rating}>
            <div className={styles.mark}>{rating}</div>
            <div className={styles.images}>
              {favoritesList.map(({ image, storageKey }) => (
                <Favorites
                  image={image}
                  storageKey={storageKey}
                  id={id}
                  key={id + storageKey}
                />
              ))}
            </div>
          </div>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.more}>
            <p className={styles.year}>{year.slice(0, 4)}</p>
            <Link to={`/film/${id}`} className={styles.seeMore}>
              Подробнее
            </Link>
          </div>
        </div>
      </div>
      <img className={styles.filmCover} src={`${imageUrl}${poster}`} alt="" />
    </div>
  );
};

export { FilmCard };
export type { FilmCardProps };
