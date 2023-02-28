import { applyAllFilters } from '../../../shared/filters/filters';
import {
  APPLY_FAVORITES,
  APPLY_GENRES,
  APPLY_RATING,
  APPLY_YEAR,
} from '../../actions';
import { initialState } from './const';
import { FilterAction } from './types';

export const applyFilters = (state = initialState, action: FilterAction) => {
  switch (action.type) {
    case APPLY_RATING: {
      const newState = { ...state, sortBy: action.payload };
      const films = applyAllFilters(newState);
      return { ...state, initList: films, sortBy: action.payload };
    }
    case APPLY_YEAR: {
      const newState = { ...state, year: action.payload };
      const films = applyAllFilters(newState);
      return { ...state, initList: films, year: action.payload };
    }
    case APPLY_GENRES: {
      const newState = { ...state, genres: action.payload };
      const films = applyAllFilters(newState);
      return { ...state, initList: films, genres: action.payload };
    }
    case APPLY_FAVORITES: {
      const newState = { ...state, favorites: action.payload };
      const films = applyAllFilters(newState);
      return { ...state, initList: films, favorites: action.payload };
    }
    default: {
      return state;
    }
  }
};
