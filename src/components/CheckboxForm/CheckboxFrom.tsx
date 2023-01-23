import styles from './CheckboxFrom.module.scss';
import genresList from '../../assets/genres.json'
import { useState } from 'react';


type Props = {};



const CheckboxFrom = ({setGenres, genres, sortGenresFilms}: Props) => {
  
  return (
    <form className={styles.form}>
      {genresList.map(({id, name}) => (
          <Checkbox key={id} id={id} name = {name} setGenres={setGenres} genres={genres} sortGenresFilms={sortGenresFilms}/>
      ))}
    </form>
  );
};

const Checkbox = ({id, name, setGenres, genres, sortGenresFilms}) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <label className={styles.label}   >
            <input className={styles.realCheckbox} type="checkbox" checked = {isChecked} onChange={()=> {
              setIsChecked(!isChecked);
              if(!isChecked) {
                setGenres([...genres, id]);
                sortGenresFilms([...genres, id]);
                
              }
              if(isChecked) {
                setGenres(genres.filter((item)=> item !== id));
                sortGenresFilms(genres.filter((item)=> item !== id));
                
              }
              
              console.log('1234')}} />
            <span className={styles.customCheckbox}></span>
            {name}
          </label>
  )
}

export { CheckboxFrom };
