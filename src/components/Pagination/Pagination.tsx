import styles from './Pagination.module.scss';

const paginationList = ['Вперед', 'Назад'];
type Props = {};

const Pagination = (props: Props) => {
  return (
    <>
      <div className={styles.container}>
        {paginationList.map((item, index) => (
          <button className={styles.button} key={index}>
            {item}
          </button>
        ))}
      </div>
      <div className={styles.text}>1 из 1455</div>
    </>
  );
};

export { Pagination };
