import { Film } from '../types';
import { getLocalItem } from '../get-local';
import filmList from '../../assets/films.json';
import genresList from '../../assets/genres.json';
import { FiltersState, SearchParamsState } from '../../store/reducers/state-types';
import { FAVORITES, POPULARITY, RATING, VOTE, YEARS } from './filters-const';
import { Favorites, Years } from './filters-types';

export const sortByRating = (rating: string, list: Film[]) => {
  if (rating === RATING.popularDesc) {
    return [...list].sort((a, b) => b.popularity - a.popularity);
  }
  if (rating === RATING.popularAsc) {
    return [...list].sort((a, b) => a.popularity - b.popularity);
  }
  if (rating === RATING.asc) {
    return [...list].sort((a, b) => a.vote_average - b.vote_average);
  }
  if (rating === RATING.desc) {
    return [...list].sort((a, b) => b.vote_average - a.vote_average);
  }
  return list;
};

export const sortByYear = (year: string, list: Film[]) => {
  for (let key in YEARS) {
    if (year === YEARS.all) {
      return list;
    }
    if (YEARS[key as keyof Years] === year) {
      return list.filter(
        (film) => film.release_date.slice(0, 4) === YEARS[key as keyof Years]
      );
    }
  }
  return list;
};

export const sortByFavorites = (favoriteType: string, list: Film[]) => {
  for (let key in FAVORITES) {
    if (FAVORITES[key as keyof Favorites] === favoriteType) {
      return getLocalItem(key);
    }
  }
  return list;
};

export const sortByGenres = (genres: number[], list: Film[]) => {
  return list.filter((item) =>
    genres.every((id) => item.genre_ids.includes(id))
  );
};

export const sortByVote = (vote: string, list: Film[]) => {
  if (vote === VOTE.high) {
    return list.filter((item) => item.vote_average >= 5);
  }
  if (vote === VOTE.low) {
    return list.filter((item) => item.vote_average < 5);
  }
  return list;
};

export const sortByPopularity = (popularity: string, list: Film[]) => {
  if (popularity === POPULARITY.popular) {
    return list.filter(
      (item) => item.popularity >= 100 && item.vote_count >= 200
    );
  }
  if (popularity === POPULARITY.unknown) {
    return list.filter(
      (item) => item.popularity < 100 || item.vote_count < 200
    );
  }
  return list;
};

export const applyAllFilters = (currentStore: FiltersState) => {
  let films = filmList;

  films = sortByFavorites(currentStore.favorites, filmList);
  films = sortByRating(currentStore.sortBy, films);
  films = sortByYear(currentStore.year, films);
  films = sortByGenres(currentStore.genres, films);

  return films;
};

export const applySearch = (currentStore: SearchParamsState) => {
  let list = filmList;
  const genre = genresList.find((item) => item.name === currentStore.genreName);
  if (genre) {
    list = sortByGenres([genre.id], list);
  }
  list = sortByVote(currentStore.filmMark, list);
  list = sortByPopularity(currentStore.popularity, list);

  return list;
};
