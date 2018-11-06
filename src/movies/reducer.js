import * as actionTypes from './actionTypes';
import * as actionUtils from '../_utility/action.utils';

export const INITIAL_STATE = {
  results: [],
  genres: undefined,
  isLoading: false,
  loadingError: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionUtils.pendingAction(actionTypes.RETRIEVE_MOVIES):
      return {
        ...state,
        isLoading: true,
        loadingError: undefined,
      };
    case actionUtils.fulfilledAction(actionTypes.RETRIEVE_MOVIES):
      return {
        ...state,
        ...action.payload, // Payload is the movies
        isLoading: false,
      };
    case actionUtils.rejectedAction(actionTypes.RETRIEVE_MOVIES):
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.message,
      };
    case actionUtils.pendingAction(actionTypes.RETRIEVE_GENRES):
      return {
        ...state,
        isLoading: true,
        loadingError: undefined,
      };
    case actionUtils.fulfilledAction(actionTypes.RETRIEVE_GENRES):
      return {
        ...state,
        ...action.payload, // Payload is the genres
        isLoading: false,
      };
    case actionUtils.rejectedAction(actionTypes.RETRIEVE_GENRES):
      return {
        ...state,
        isLoading: false,
        loadingError: action.payload.message,
      };

    default:
      return state;
  }
};
