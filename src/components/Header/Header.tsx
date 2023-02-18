import { Button } from '../Button/Button';
import styles from './Header.module.scss';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a href="#">Home</a>
        <form action="#" className={styles.form}>
          <svg
            className={styles.search}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.447 10.9697H11.6689L11.3932 10.7038C12.3583 9.58106 12.9394 8.12348 12.9394 6.53788C12.9394 3.00227 10.0735 0.13636 6.53787 0.13636C3.00226 0.13636 0.136353 3.00227 0.136353 6.53788C0.136353 10.0735 3.00226 12.9394 6.53787 12.9394C8.12348 12.9394 9.58105 12.3583 10.7038 11.3932L10.9697 11.6689V12.447L15.8939 17.3614L17.3614 15.8939L12.447 10.9697ZM6.53787 10.9697C4.0856 10.9697 2.10605 8.99015 2.10605 6.53788C2.10605 4.0856 4.0856 2.10606 6.53787 2.10606C8.99014 2.10606 10.9697 4.0856 10.9697 6.53788C10.9697 8.99015 8.99014 10.9697 6.53787 10.9697Z"
              fill="white"
            />
          </svg>
          <input type="text" placeholder="Название..." />
        </form>
        <Button children={'Логин'} />
      </div>
    </div>
  );
};

export { Header };
