import { useState } from 'react';
import { Film } from '../assets/shared/types';

export const usePagination = (filmsPerPage: number, currentList: Film[]) => {
  const startPage = 1;

  const [currentPage, setCurrentPage] = useState(startPage);

  const lastFilmsIndex = currentPage * filmsPerPage;
  const firstFilmsIndex = lastFilmsIndex - filmsPerPage;
  const currentFilms = currentList.slice(firstFilmsIndex, lastFilmsIndex);
  const pages = Math.ceil(currentList.length / filmsPerPage);
  const result: [number, number, (value: number) => void, Film[]] = [
    pages,
    currentPage,
    setCurrentPage,
    currentFilms,
  ];
  return result;
};
