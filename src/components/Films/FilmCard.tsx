import styles from './Films.module.scss';
import filmCover from '../../img/film-cover.png';

type Props = {};

const FilmCard = (props: Props) => {
  return (
    <div className={styles.filmCard}>
      <div className={styles.filmContainer}>
        <div className={styles.wrapper}>
          <div className={styles.rating}>
            <div className={styles.mark}> 8.4</div>
            <div className={styles.images}>
              <svg
                className={styles.star}
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
                  stroke="#e7be35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2.5"
                />
              </svg>
              <svg
                className={styles.bookmark}
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z" />
              </svg>
            </div>
          </div>
          <h2 className={styles.title}>The Dark Knight</h2>
          <p className={styles.year}>2022</p>
        </div>
      </div>
      <img className={styles.filmCover} src={filmCover} alt="" />
    </div>
  );
};

export { FilmCard };
