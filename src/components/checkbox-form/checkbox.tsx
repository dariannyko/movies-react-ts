import { useState } from 'react';
import { SortPayload } from '../../shared/types';
import styles from './checkbox.module.scss';

interface CheckboxProps {
  id: number;
  name: string;
  genres: number[];
  sortType: string;
  changeGenres: (firstValue: string, secondValue: SortPayload) => void;
}

const Checkbox = ({
  id,
  name,
  genres,
  changeGenres,
  sortType,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className={styles.label}>
      <input
        className={styles.realCheckbox}
        type="checkbox"
        checked={genres?.length ? isChecked : false}
        onChange={() => {
          setIsChecked(!isChecked);
          if (!isChecked) {
            changeGenres(sortType, [...genres, id]);
          }
          if (isChecked) {
            changeGenres(
              sortType,
              genres.filter((item) => item !== id)
            );
          }
        }}
      />
      <span className={styles.customCheckbox}></span>
      {name}
    </label>
  );
};

export { Checkbox };
export type { CheckboxProps };


