import { SortPayload } from '../../App';
import { Checkbox } from './checkbox';
import styles from './checkbox-form.module.scss'

interface GenresType {
  id: number;
  name: string;
}

type Props = {
  genresList: GenresType[],
  genres: number[];
  sortType: string;
  changeGenres: (firstValue:string, secondValue:SortPayload )=> void;
};

const CheckboxFrom = ({ genres, changeGenres, sortType, genresList }: Props) => {
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


