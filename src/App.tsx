import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from './components/header/header';
import { Modal } from './components/modal/modal';
import { changeFilterType, showModal } from './store/actions';
import { initialFilters } from './shared/const';
import { SortPayload, InitialFilters } from './shared/types';
import { initialFavorites } from './store/reducers/apply-filters/const';
import { StoreState } from './store/state-types';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const userStatus = useSelector((state: StoreState) => state.authorize);
  const isModal = useSelector((state: StoreState) => state.setModal);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const changeSortType = (actionType: string, sortType: SortPayload) => {
    dispatch(changeFilterType(actionType, sortType));
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
      dispatch(changeFilterType(actionType, listType));
      return;
    }
    if (!userStatus) {
      dispatch(showModal(true));
      return;
    }
    resetFilters();

    dispatch(changeFilterType(actionType, listType));
  };
console.log(isModal);

  return (
    <div className="App">
      {isModal && <Modal />}
      <Header resetFilters={resetFilters} />

      <Outlet
        context={{
          changeFavoritesType: changeFavoritesType,
          isLoading: isLoading,
          resetFilters: resetFilters,
          changeSortType: changeSortType,
        }}
      />
    </div>
  );
}

export default App;
