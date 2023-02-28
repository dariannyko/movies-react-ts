import { Filters } from '../components/filters/filters';
import { Films } from '../components/films/films';
import { usePagination } from '../hooks/use-pagination';
import { useSelector } from 'react-redux';
import { ReduxState } from '../store/reducers/state-types';

const filmsPerPage = 10;

const Home = () => {
  const currentStore = useSelector((state: ReduxState) => state.applyFilters);
  const currentList = currentStore.initList;

  const { pages, currentPage, setCurrentPage, currentFilms } = usePagination(
    filmsPerPage,
    currentList
  );

  return (
    <div className="container">
      <Filters
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Films currentFilms={currentFilms} />
    </div>
  );
};

export { Home };
