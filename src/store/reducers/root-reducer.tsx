import { combineReducers } from 'redux';
import { Film } from '../../shared/types';
import { applyFilters } from './apply-filters/apply-filters';
import { applySearchParams } from './apply-search-params/apply-search-params';
import { authorize } from './authorize/authorize';
import { setModal } from './show-modal/show-modal';

export const rootReducer = combineReducers({
  applyFilters,
  applySearchParams,
  authorize,
  setModal,
});
