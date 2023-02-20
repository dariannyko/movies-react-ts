import { useOutletContext } from 'react-router-dom';
import { Filters } from '../components/filters/filters';
import { Films } from '../components/films/films';
import { usePagination } from '../hooks/use-pagination';
import { ContextType } from '../App';

const filmsPerPage = 10;

type Props = {};

const Home = (props: Props) => {
  const { currentList } = useOutletContext<ContextType>();

  const [pages, currentPage, setCurrentPage, currentFilms] = usePagination(
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
