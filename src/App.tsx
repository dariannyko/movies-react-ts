import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from './components/_header/_header';
import { Modal } from './components/modal/modal';
import { MODAL } from './store/actions';
import {
  initialRating,
  initialYear,
  initialGenres,
  initialFavorites,
} from './store/reducers';
import { ReduxState } from './store/reducers';
import {
  sortByRating,
  sortByYear,
  sortByFavorites,
  sortByGenres,
} from './shared/filters';
import { Film } from './shared/types';
import { getLocalItem } from './shared/get-local';
import filmsList from './assets/films.json';
import './App.scss';

export const isDetailsOpen = 'isFilmDetails';
export const userKey = 'isUser';

interface InitialFilters {
  APPLY_RATING: string;
  APPLY_YEAR: string;
  APPLY_GENRES: number[];
}
const initialFilters: InitialFilters = {
  APPLY_RATING: initialRating,
  APPLY_YEAR: initialYear,
  APPLY_GENRES: initialGenres,
};
export type SortPayload = string | number[];

export interface ContextType {
  changeFavoritesType: (firstValue: string, secondValue: SortPayload) => void;
  isLoading: boolean;
  isFilmDetails: boolean;
  setIsFilmDetails: (value: boolean) => void;
  currentList: Film[];
  resetFilters: () => void;
  changeSortType: (firstValue: string, secondValue: SortPayload) => void;
}

function App() {
  const dispatch = useDispatch();

  const [currentList, setCurrentList] = useState(filmsList);
  const currentStore = useSelector((state: ReduxState) => state.applyFilters);
  const userStatus = useSelector((state: ReduxState) => state.authorize);
  const isModal = useSelector((state: ReduxState) => state.showModal);

  const [isFilmDetails, setIsFilmDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentList(filmsList);
    setIsLoading(false);
    if (getLocalItem(isDetailsOpen)) {
      setIsFilmDetails(true);
    }
  }, []);

  useEffect(() => {
    const newList = applyFilters();
    setCurrentList(newList);
  }, [
    currentStore.sortBy,
    currentStore.year,
    currentStore.genres,
    currentStore.favorites,
  ]);

  const changeSortType = (actionType: string, sortType: SortPayload) => {
    dispatch({
      type: actionType,
      payload: sortType,
    });
  };

  const applyFilters = () => {
    let films = filmsList;
    if (currentStore.favorites) {
      films = sortByFavorites(currentStore.favorites, filmsList);
    }
    if (currentStore.sortBy) {
      films = sortByRating(currentStore.sortBy, films);
    }
    if (currentStore.year) {
      films = sortByYear(currentStore.year, films);
    }
    if (currentStore.genres) {
      films = sortByGenres(currentStore.genres, films);
    }
    return films;
  };

  const resetFilters = () => {
    for (let key in initialFilters) {
      dispatch({
        type: key,
        payload: initialFilters[key as keyof InitialFilters],
      });
    }
  };

  const changeFavoritesType = (actionType: string, listType: string) => {
    if (!userStatus && listType === initialFavorites) {
      dispatch({
        type: actionType,
        payload: listType,
      });
      return;
    }
    if (!userStatus) {
      dispatch({
        type: MODAL,
        payload: true,
      });
      return;
    }
    resetFilters();

    dispatch({
      type: actionType,
      payload: listType,
    });
  };

  return (
    <div className="App">
      {isModal && <Modal />}
      <Header
        isFilmDetails={isFilmDetails}
        setIsFilmDetails={setIsFilmDetails}
      />

      <Outlet
        context={{
          changeFavoritesType: changeFavoritesType,
          isLoading: isLoading,
          isFilmDetails: isFilmDetails,
          setIsFilmDetails: setIsFilmDetails,
          currentList: currentList,
          resetFilters: resetFilters,
          changeSortType: changeSortType,
        }}
      />
    </div>
  );
}

export default App;
