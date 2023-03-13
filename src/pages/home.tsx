import { Filters } from '../components/filters/filters';
import { Films } from '../components/films/films';
import { usePagination } from '../hooks/use-pagination';
import { useSelector } from 'react-redux';
import { StoreState } from '../store/state-types';

const filmsPerPage = 10;

const Home = () => {
  const currentStore = useSelector((state: StoreState) => state.applyFilters);
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
