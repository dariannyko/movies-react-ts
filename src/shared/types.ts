export interface Film {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface InitialFilters {
  APPLY_RATING: string;
  APPLY_YEAR: string;
  APPLY_GENRES: number[];
}

export type SortPayload = string | number[];

export interface PaginationResult {
  pages: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  currentFilms: Film[];
}

export interface GenresType {
  id: number;
  name: string;
}
