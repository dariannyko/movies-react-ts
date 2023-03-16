import { applySearch } from '../../../shared/filters/filters';
import {
  APPLY_GENRE_NAME,
  APPLY_MARK,
  APPLY_POPULARITY,
  APPLY_SEARCH_PARAMS,
} from '../../actions';
import { searchInitialState } from './const';
import { SearchPayload } from './types';

export const applySearchParams = (
  state = searchInitialState,
  action: SearchPayload
) => {
  switch (action.type) {
    case APPLY_MARK: {
      return { ...state, filmMark: action.payload };
    }
    case APPLY_POPULARITY: {
      return { ...state, popularity: action.payload };
    }
    case APPLY_GENRE_NAME: {
      return { ...state, genreName: action.payload };
    }
    case APPLY_SEARCH_PARAMS: {
      const newState = { ...state };
      const films = applySearch(newState);
      return { ...state, currentFilmsList: films };
    }
    default: {
      return state;
    }
  }
};
