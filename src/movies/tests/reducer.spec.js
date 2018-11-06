import moviesReducer, { INITIAL_STATE } from '../reducer';

describe('Movies Tests', () => {
  describe('Should return initial state if not specified', () => {
    it('', () => {
      const actualState = moviesReducer(undefined, {});
      expect(actualState).toEqual(INITIAL_STATE);
    });
  });
});
