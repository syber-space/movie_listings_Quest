import { createAction } from '../_utility/action.utils';
import * as actionTypes from './actionTypes';

export const applyGenres = () => (dispatch, getState) => {
  const genres = getState().movies;
  createAction(
    actionTypes.APPLY_GENRES,
    { genres }
  );
};

export const handleGenreChange = (genre, isChecked) => {
  if (isChecked) {
    return createAction(
      actionTypes.REMOVE_GENRE,
      genre
    );
  }
  return createAction(
    actionTypes.ADD_GENRE,
    genre
  );
};

export const handleRatingChange = rating => createAction(
  actionTypes.RATING_CHANGE,
  rating
);
