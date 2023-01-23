import { useState, useEffect } from 'react';
import { Filters } from './components/Filters/Filters';
import { Header } from './components/Header/Header';
import { Films } from './components/Films/Films';
// import { getFilms } from './ts/request';
import filmsList from './assets/films.json';
import genres from './assets/genres.json';
import { Film } from '../src/assets/shared/Types';
import { useDispatch,useSelector } from 'react-redux';
import { YEAR, GENRES, APPLY } from './store/actions';
import './App.scss';
// const filmsUrl = 'https://newfilms.free.beeceptor.com/films';

const initialFilms = 10;
const startPage = 1;
const initialRating = 'Популярные по убыванию';
const initialYear = 'all';

 const RATING = {
  popularDesc: 'Популярные по убыванию',
  popularAsc: 'Популярные по возрастанию',
  desc: 'Рейтинг по убыванию',
  asc: 'Рейтинг по возрастанию',
};


function App() {
  const [films, setFilms] = useState<Film[]>([]);

  const dispatch = useDispatch();
  
  const currentList = useSelector((state) => state.sortRating);
  const yearList = useSelector((state) => state.sortYear);
  const genresList = useSelector((state)=> state.sortGenres);

  const [rating, setRating] = useState(initialRating);
  const [yearSort, setYearSort] = useState(initialYear);
  const [genres, setGenres] = useState([]);

  const [currentPage, setCurrentPage] = useState(startPage);
  const [filmsPerPage] = useState(initialFilms);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setFilms(filmsList);
    setIsLoading(false);
  }, []);


  const rateFilms = (rating: string) => {
    dispatch({
      type: rating,
      payload: films,
    });
    // if(rating === RATING.popularDesc) {
    //   dispatch({
    //     type: APPLY,
    //     payload: [...filmsList].sort((a, b) => b.popularity - a.popularity)
    //   });
    // }
    // if(rating === RATING.popularAsc) {
    //   dispatch({
    //     type: APPLY,
    //     payload: [...filmsList].sort((a, b) => a.popularity - b.popularity)
    //   });
    // }
    
    // if(rating === RATING.asc) {
    //   dispatch({
    //     type: APPLY,
    //     payload: [...filmsList].sort((a, b) => a.vote_average - b.vote_average)
    //   });
    // }
    // if(rating === RATING.desc) {
    //   dispatch({
    //     type: APPLY,
    //     payload: [...filmsList].sort((a, b) => b.vote_average - a.vote_average)
    //   });
    // }
  };

  const sortYearFilms = (year:string) => {
    dispatch({
      type: YEAR,
      payload: {
        year: year,
        films: films,
      },
    });
  };
  const sortGenresFilms = (id:number) => {
    dispatch({
      type: GENRES,
      payload: {
        id: id,
        films: films,
      }
    });
  };

  const applyFilters = (rate = rating, year = yearSort) => { 

    
  };
  




  const lastFilmsIndex = currentPage * filmsPerPage;
  const firstFilmsIndex = lastFilmsIndex - filmsPerPage;


  const currentFilms = currentList.slice(firstFilmsIndex, lastFilmsIndex);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Filters
          filmsPerPage={filmsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rating={rating}
          yearSort={yearSort}
          setRating={setRating}
          setGenres = {setGenres}
          genres = {genres}
          setYearSort={setYearSort}
          rateFilms = {rateFilms}
          sortYearFilms={sortYearFilms}
          applyFilters={applyFilters}
          sortGenresFilms= {sortGenresFilms}
        />
        <Films currentFilms={currentFilms} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
