import styles from './CheckboxFrom.module.scss';
import genres from '../../assets/genres.json'


type Props = {};


const CheckboxFrom = (props: Props) => {
  return (
    <form className={styles.form}>
      {genres.map(({id, name}) => (
          <label className={styles.label} key={id}>
            <input className={styles.realCheckbox} type="checkbox" />
            <span className={styles.customCheckbox}></span>
            {name}
          </label>
      ))}
    </form>
  );
};

export { CheckboxFrom };
