import { combineReducers } from 'redux';
import filmList from '../assets/films.json';
import { RATING, YEAR, YEARS, GENRES, APPLY } from './actions';

const sortRating = (state = filmList, action) => {
  switch (action.type) {
    case RATING.popularDesc: {
      return [...state].sort((a, b) => b.popularity - a.popularity);
    }
    case RATING.popularAsc: {
      return [...state].sort((a, b) => a.popularity - b.popularity);
    }
    case RATING.asc: {
      return [...state].sort((a, b) => a.vote_average - b.vote_average);
    }
    case RATING.desc: {
      return [...state].sort((a, b) => b.vote_average - a.vote_average);
    }
    default: {
      return state;
    }
  }
};

const sortYear = (state = [], action) => {
  switch (action.type) {
    case YEAR: {
      for (let key in YEARS) {
        if (action.payload.year === YEARS.all) {
          return action.payload.films;
        }
        if (YEARS[key] === action.payload.year) {
          return action.payload.films.filter(
            (film) => film.release_date.slice(0, 4) === YEARS[key]
          );
        }
      }
    }
    default: {
      return state;
    }
  }
};

const sortGenres = (state = filmList, action) => {
  switch (action.type) {
    case GENRES: {
      return action.payload.films.filter((item) =>
        action.payload.id.every((id) => item.genre_ids.includes(id))
      );
    }
    default: {
      return state;
    }
  }
};
// const applyAll = (state = filmList, action) => {
//   switch (action.type) {
//     case APPLY: {
//       return action.payload;
//     }
//     default: {
//       return state;
//     }
//   }
// };



export const rootReducer = combineReducers({
  sortRating: sortRating,
  sortYear: sortYear,
  sortGenres: sortGenres,
  // applyAll: applyAll,
});
