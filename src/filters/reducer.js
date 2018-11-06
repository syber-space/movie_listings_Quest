import without from 'lodash/without';

import * as actionTypes from './actionTypes';
import * as actionUtils from '../_utility/action.utils';

export const INITIAL_STATE = {
  genres: undefined,
  rating: 3,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionUtils.fulfilledAction(actionTypes.RETRIEVE_GENRES):
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.REMOVE_GENRE:
      return {
        ...state,
        genres: [
          ...without(state.genres, action.payload),
        ],
      };
    case actionTypes.ADD_GENRE:
      return {
        ...state,
        genres: [
          ...state.genres,
          action.payload,
        ],
      };
    case actionTypes.RATING_CHANGE:
      return {
        ...state,
        rating: action.payload,
      };

    default:
      return state;
  }
};
