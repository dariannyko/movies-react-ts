import { useState, useEffect } from 'react';
import { Filters } from './components/Filters/Filters';
import { Header } from './components/Header/Header';
import { Films } from './components/Films/Films';
import { getFilms } from './ts/request';
import './App.scss';

const filmsUrl = 'https://nnyko.free.beeceptor.com/films';
const initialFilms = 10;
const startPage = 1;

function App() {
  const [films, setFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(startPage);
  const [filmsPerPage] = useState(initialFilms);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getFilms(filmsUrl).then((result) => {
      setFilms(result)
      setIsLoading(false)
    });
  }, []);

  const lastFilmsIndex = currentPage * filmsPerPage;
  const firstFilmsIndex = lastFilmsIndex - filmsPerPage;
  const currentFilms = films.slice(firstFilmsIndex, lastFilmsIndex);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Filters
          filmsPerPage={filmsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Films currentFilms={currentFilms} isLoading={isLoading}/>
      </div>
    </div>
  );
}

export default App;
