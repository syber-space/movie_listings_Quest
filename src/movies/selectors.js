export const getMovies = (localState = {}) => localState.results;
export const getGenres = (localState = {}) => localState.genres;
export const isLoadingMovies = (localState = {}) => localState.isLoading;
export const getLoadingError = (localState = {}) => localState.loadingError;
