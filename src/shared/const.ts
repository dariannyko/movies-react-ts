import { initialGenres, initialRating, initialYear } from '../store/reducers/apply-filters/const';
import { InitialFilters } from './types';

export const userKey = 'isUser';

export const initialFilters: InitialFilters = {
  APPLY_RATING: initialRating,
  APPLY_YEAR: initialYear,
  APPLY_GENRES: initialGenres,
};
