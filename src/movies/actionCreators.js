import { createAction } from '../_utility/action.utils';
import * as actionTypes from './actionTypes';
import * as moviesApi from './api';

export const retrieveMovies = () => createAction(
  actionTypes.RETRIEVE_MOVIES,
  { promise: moviesApi.getMovies() }
);

export const retrieveGenres = () => createAction(
  actionTypes.RETRIEVE_GENRES,
  { promise: moviesApi.getGenres() }
);
