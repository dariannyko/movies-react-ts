import { Button } from '../Button/Button';
import { CheckboxFrom } from '../CheckboxForm/CheckboxFrom';
import { Pagination } from '../Pagination/Pagination';
import { Sort } from '../Sort/Sort';
import styles from './Filters.module.scss';


type Props = {};

const sortList = [
  'Популярные по убыванию',
  'Популярные по убыванию',
  'Популярные по убыванию',
];
const yearList = ['2022', '2021', '2020'];

const Filters = (props: Props) => {
  return (
    <aside className={styles.container}>
      <h1 className={styles.title}>Фильтры</h1>
      <div className={styles.filtersButton}>
        <Button children={'Сбросить все фильтры'}/>
      </div>
      <Sort
        title={'Сортировать по'}
        sortName={'Популярные по убыванию'}
        sortList={sortList}
      />
      <Sort title={'Год релиза'} sortName={'2022'} sortList={yearList} />
      <CheckboxFrom />
      <Pagination/>
    </aside>
  );
};

export { Filters };
