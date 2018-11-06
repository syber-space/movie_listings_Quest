import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import * as globalSelectors from '../../app/selectors';
import * as moviesActionCreators from '../actionCreators';
import tableStyle from '../styles/table.style';
import Movie from './Movie';
import Filters from './Filters';
import Loading from './Loading';

class MoviesList extends Component {
  componentDidMount() {
    const {
      retrieveMovies,
    } = this.props;

    retrieveMovies();
  }

  render() {
    const {
      results,
      genres,
      isLoading,
      loadingError,
      activeGenres,
      rating,
    } = this.props;

    const showTable = Boolean(results);

    return (
      <div>
        {isLoading && <Loading />}
        {loadingError
          ? (
            <div>
              <p>
                {'Sorry, there has been an error.'}
              </p>
              <img alt="Error" src="https://lumiere-a.akamaihd.net/v1/images/at-at-bio-6_a45b18ea.jpeg" />
            </div>
          )
          : (showTable && (
            <div>
              <Filters />
              <Table bordered style={tableStyle.main}>
                <thead>
                  <tr>
                    <th key="header-item-title" style={tableStyle.th}>
                      Title
                    </th>
                    <th key="header-item-genre" style={tableStyle.th}>
                      Genre
                    </th>
                    <th key="header-item-poster" style={tableStyle.th}>
                      Poster
                    </th>
                    <th key="header-item-rating" style={tableStyle.th}>
                      Rating
                    </th>
                    <th key="header-item-popularity" style={tableStyle.th}>
                      Popularity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {genres && (
                    results.map((movie) => {
                      const showGenres = movie.genre_ids.map(genreId => genres.find(obj => obj.id === genreId));
                      return (
                        <Movie
                          key={`movie-${movie.id}`}
                          movie={movie}
                          activeGenres={activeGenres}
                          rating={rating}
                          genres={showGenres.map(el => el.name).join(', ')}
                        />
                      );
                    }))}
                </tbody>
              </Table>
            </div>
          ))
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
  results: PropTypes.array.isRequired,
  genres: PropTypes.array,
  retrieveMovies: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadingError: PropTypes.string,
  activeGenres: PropTypes.array,
  rating: PropTypes.number.isRequired,
};

MoviesList.defaultProps = {
  loadingError: undefined,
  genres: undefined,
  activeGenres: undefined,
};

const mapStateToProps = state => ({
  results: globalSelectors.getMovies(state),
  genres: globalSelectors.getGenres(state),
  isLoading: globalSelectors.isLoadingMovies(state),
  loadingError: globalSelectors.getLoadingError(state),
  activeGenres: globalSelectors.getActiveGenres(state),
  rating: globalSelectors.getRating(state),
});

const mapDispatchToProps = dispatch => ({
  retrieveMovies: () => dispatch(moviesActionCreators.retrieveMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
