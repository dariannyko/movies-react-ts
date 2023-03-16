import { SortPayload } from '../shared/types';
import { SearchParams } from './reducers/apply-search-params/types';

export const APPLY_RATING = 'APPLY_RATING';
export const APPLY_YEAR = 'APPLY_YEAR';
export const APPLY_GENRES = 'APPLY_GENRES';
export const APPLY_FAVORITES = 'FAVORITES';
export const APPLY_MARK = 'APPLY_MARK';
export const APPLY_POPULARITY = 'APPLY_POPULARITY';
export const APPLY_GENRE_NAME = 'APPLY_GENRE_NAME';
export const APPLY_SEARCH_PARAMS = 'APPLY_SEARCH_PARAMS';
export const SET_AUTHORIZE = 'SET_AUTHORIZE';
export const SET_MODAL = 'SET_MODAL';

export const showModal = (isModal: boolean) => {
  return {
    type: SET_MODAL,
    payload: isModal,
  };
};

export const authorizeUser = (isAuthorize: boolean) => {
  return {
    type: SET_AUTHORIZE,
    payload: isAuthorize,
  };
};

export const setSearchParams = (params: SearchParams | string) => {
  return {
    type: APPLY_SEARCH_PARAMS,
    payload: params,
  };
};

export const changeFilterType = (
  actionType: string,
  filterType: SortPayload
) => {
  return {
    type: actionType,
    payload: filterType,
  };
};
