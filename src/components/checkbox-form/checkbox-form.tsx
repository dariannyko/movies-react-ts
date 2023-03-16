import { GenresType, SortPayload } from '../../shared/types';
import { Checkbox } from './checkbox';
import styles from './checkbox-form.module.scss';

interface CheckboxFromProps {
  genresList: GenresType[];
  genres: number[];
  sortType: string;
  changeGenres: (firstValue: string, secondValue: SortPayload) => void;
}

const CheckboxFrom = ({
  genres,
  changeGenres,
  sortType,
  genresList,
}: CheckboxFromProps) => {
  return (
    <form className={styles.form}>
      {genresList.map(({ id, name }) => (
        <Checkbox
          key={id}
          id={id}
          name={name}
          genres={genres}
          changeGenres={changeGenres}
          sortType={sortType}
        />
      ))}
    </form>
  );
};

export { CheckboxFrom };
export type { CheckboxFromProps };
