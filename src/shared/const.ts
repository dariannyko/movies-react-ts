import { initialGenres, initialRating, initialYear } from '../store/reducers/apply-filters/const';
import { InitialFilters } from './types';

export const userKey = 'isUser';

export const initialFilters: InitialFilters = {
  APPLY_RATING: initialRating,
  APPLY_YEAR: initialYear,
  APPLY_GENRES: initialGenres,
};


export const sortList = [
  'Популярные по убыванию',
  'Популярные по возрастанию',
  'Рейтинг по убыванию',
  'Рейтинг по возрастанию',
];
export const yearList = ['Показать все', '2020', '2019', '2018', '2017'];
export const favoriteList = ['none', 'Избранное', 'Смотреть позже'];

