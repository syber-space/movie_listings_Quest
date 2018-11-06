import { combineReducers } from 'redux';
import moviesReducer from '../movies/reducer';
import filtersReducer from '../filters/reducer';

export default combineReducers({
  movies: moviesReducer,
  filters: filtersReducer,
});
