import filmList from '../../../assets/films.json';

export const initialRating = 'Популярные по убыванию';
export const initialYear = 'Показать все';
export const initialFavorites = 'none';
export const initialGenres: number[] = [];

export const initialState = {
    initList: filmList,
    sortBy: initialRating,
    genres: initialGenres,
    year: initialYear,
    favorites: initialFavorites,
  };