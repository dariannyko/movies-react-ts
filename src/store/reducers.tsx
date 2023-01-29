import { combineReducers } from 'redux';
import filmList from '../assets/films.json';
import {
  APPLY_RATING,
  APPLY_YEAR,
  APPLY_GENRES,
  APPLY_FAVORITES,
  AUTHORIZE,
  MODAL,
} from './actions';
import { getLocalItem } from '../assets/shared/get-local';
import { Film } from '../assets/shared/types';

export interface ReduxState {
  applyFilters: {
    initList: Film;
    sortBy: string;
    genres: number[];
    year: string;
    favorites: string;
  };
  authorize: boolean;
  showModal: boolean;
}

export const initialRating = 'Популярные по убыванию';
export const initialYear = 'Показать все';
export const initialFavorites = 'none';
export const initialGenres: number[] = [];

const initialState = {
  initList: filmList,
  sortBy: initialRating,
  genres: initialGenres,
  year: initialYear,
  favorites: initialFavorites,
};

interface ApplyAllAction {
  type: string;
  payload: string;
}
interface ApplyGenresAction {
  type: string;
  payload: number[];
}

type FilterAction = ApplyAllAction | ApplyGenresAction;

const applyFilters = (state = initialState, action: FilterAction) => {
  switch (action.type) {
    case APPLY_RATING: {
      return { ...state, sortBy: action.payload };
    }
    case APPLY_YEAR: {
      return { ...state, year: action.payload };
    }
    case APPLY_GENRES: {
      return { ...state, genres: action.payload };
    }
    case APPLY_FAVORITES: {
      return { ...state, favorites: action.payload };
    }
    default: {
      return state;
    }
  }
};

interface AuthorizationAction {
  type: string;
  payload: boolean;
}
const userKey = 'isUser';
const initialUserStatus: boolean = getLocalItem(userKey) || false;

const authorize = (state = initialUserStatus, action: AuthorizationAction) => {
  switch (action.type) {
    case AUTHORIZE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

interface ModalAction {
  type: string;
  payload: boolean;
}
const initialModal = false;

const showModal = (state = initialModal, action: ModalAction) => {
  switch (action.type) {
    case MODAL: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  applyFilters,
  authorize,
  showModal,
});
