import styles from './CheckboxFrom.module.scss';

type Props = {};

const checkList = [
  'боевик',
  'приключения',
  'мультфильм',
  'комедия',
  'криминал',
  'боевик',
  'приключения',
  'мультфильм',
  'комедия',
  'криминал',
  'боевик',
  'приключения',
  'мультфильм',
  'комедия',
  'криминал',
  'боевик',
  'приключения',
  'мультфильм',
  'комедия',
  'криминал',
];

const CheckboxFrom = (props: Props) => {
  return (
    <form className={styles.form}>
      {checkList.map((item, index) => (
          <label className={styles.label} key={index}>
            <input className={styles.realCheckbox} type="checkbox" />
            <span className={styles.customCheckbox}></span>
            {item}
          </label>
      ))}
    </form>
  );
};

export { CheckboxFrom };
