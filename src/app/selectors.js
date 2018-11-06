import * as moviesSelectors from '../movies/selectors';
import * as filtersSelectors from '../filters/selectors';

export const getMovies = (state = {}) => moviesSelectors.getMovies(state.movies);
export const getGenres = (state = {}) => moviesSelectors.getGenres(state.movies);
export const getActiveGenres = (state = {}) => filtersSelectors.getActiveGenres(state.filters);
export const getRating = (state = {}) => filtersSelectors.getRating(state.filters);
export const isLoadingMovies = (state = {}) => moviesSelectors.isLoadingMovies(state.movies);
export const getLoadingError = (state = {}) => moviesSelectors.getLoadingError(state.movies);
