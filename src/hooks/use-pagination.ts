import { useState } from 'react';
import { Film, PaginationResult } from '../shared/types';
export const startPage = 1;

export const usePagination = (filmsPerPage: number, currentList: Film[]) => {
  const [currentPage, setCurrentPage] = useState(startPage);

  const lastFilmsIndex = currentPage * filmsPerPage;
  const firstFilmsIndex = lastFilmsIndex - filmsPerPage;
  const currentFilms = currentList.slice(firstFilmsIndex, lastFilmsIndex);
  const pages = Math.ceil(currentList.length / filmsPerPage);
  const result: PaginationResult = {
    pages,
    currentPage,
    setCurrentPage,
    currentFilms,
  };
  return result;
};
