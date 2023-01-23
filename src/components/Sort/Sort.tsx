import { useState } from 'react';
import styles from './Sort.module.scss';
import filmsList from '../../assets/films.json';

type Props = {
  title: string;
  sortList: string[];
  sortItem: string;
  sort: (value: string) => void;
  setSort: (value: string) => void;
};

const Sort = ({ title, sortList, sortItem, setSort, rateFilms }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (

    
    <div className={styles.sort}>
      <div className={styles.sortTitle}>{title}</div>
      <div className={styles.sortContainer}>
        <div
          className={styles.sortSelect}
          onClick={() => setIsVisible(!isVisible)}
        >
          <div className={styles.text}>{sortItem}</div>
          <svg
            className={styles.sortImg}
            height="512px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z" />
          </svg>
        </div>
        <ul
          className={`${styles.selectList} ${isVisible ? styles.active : ''}`}
        >
          {sortList.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSort(item);
                // if (title === 'Сортировать по') {
                //   rateFilms(item, undefined)
                // } else {
                //   rateFilms(undefined, item)
                // }
                rateFilms(item)
                setIsVisible(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Sort };
