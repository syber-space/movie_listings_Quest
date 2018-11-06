import filtersReducer, { INITIAL_STATE } from '../reducer';
import * as actionTypes from '../actionTypes';
import { createAction } from '../../_utility/action.utils';

describe('Filter tests', () => {
  it('Should return initial state if not specified', () => {
    const actualState = filtersReducer(undefined, {});
    expect(actualState).toEqual(INITIAL_STATE);
  });

  it('Should be able to use minimum rating', () => {
    const rating = 3;
    const action = createAction(
      actionTypes.SET_SORTING_DIMENSION,
      rating
    );
    const actualState = filtersReducer(INITIAL_STATE, action);
    expect(actualState).toEqual({ ...INITIAL_STATE, rating });
  });
});
