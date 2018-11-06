import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import { store } from './app';
import MoviesList from './movies/components/MoviesList';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <MoviesList />
  </Provider>,
  root
);
