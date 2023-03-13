import { Film } from '../shared/types';

export interface FiltersState {
  initList: Film[];
  sortBy: string;
  genres: number[];
  year: string;
  favorites: string;
}

export interface SearchParamsState {
  currentFilmsList: Film[];
  filmMark: string;
  popularity: string;
  genreName: string;
}

export interface StoreState {
  applyFilters: FiltersState;
  applySearchParams: SearchParamsState;
  authorize: boolean;
  showModal: boolean;
}
