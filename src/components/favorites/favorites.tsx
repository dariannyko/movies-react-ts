import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { getLocalItem } from '../../shared/get-local';
import { Film } from '../../shared/types';
import { showModal } from '../../store/actions';
import filmsList from '../../assets/films.json';
import { StoreState } from '../../store/state-types';
import styles from './favorites.module.scss';

interface FavoritesProps {
  image: JSX.Element;
  storageKey: string;
  id: number;
}

const Favorites = ({ image, storageKey, id }: FavoritesProps) => {
  const dispatch = useDispatch();
  const userStatus = useSelector((state: StoreState) => state.authorize);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkFavorites(storageKey, setIsFavorite);
  }, [userStatus]);

  const checkFavorites = (key: string, setState: (value: boolean) => void) => {
    if (!userStatus) {
      setState(false);
      return;
    }
    const currentList = getLocalItem(key) || [];
    if (
      currentList.find((item: Film) => {
        return item.id === id;
      })
    ) {
      setState(true);
    }
  };

  const addFavorites = (
    key: string,
    state: boolean,
    setState: (value: boolean) => void
  ) => {
    if (!userStatus) {
      dispatch(showModal(true));
      return;
    }

    const currentList = getLocalItem(key) || [];
    const film = filmsList.find((item) => item.id === id);
    setState(!state);

    if (!state) {
      localStorage.setItem(key, JSON.stringify([...currentList, film]));
      return;
    }

    localStorage.setItem(
      key,
      JSON.stringify([...currentList.filter((item: Film) => item.id !== id)])
    );
  };

  return (
    <button
      className={`${styles[storageKey]} ${isFavorite ? styles.active : ''}`}
      onClick={() => addFavorites(storageKey, isFavorite, setIsFavorite)}
    >
      {image}
    </button>
  );
};

export { Favorites };
export type { FavoritesProps };
