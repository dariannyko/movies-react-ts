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
  setModal: boolean;
}

('{ sortBy: string | number[]; initList: ({ adult: boolean; backdrop_path: string; genre_ids: number[]; id: number; original_language: string; original_title: string; overview: string; popularity: number; ... 5 more ...; vote_count: number; } | { ...; })[]; genres: number[]; year: string; favorites: string; }');
