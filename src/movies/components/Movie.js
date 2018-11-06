import React from 'react';
import PropTypes from 'prop-types';
import tableStyle from '../styles/table.style';

const baseMovieUrl = 'http://image.tmdb.org/t/p/w185';

const Movie = ({
  movie,
  genres,
  activeGenres,
  rating,
}) => {
  const isAboveRating = movie.vote_average >= rating;
  const containsGenre = movie.genre_ids.map(genreId => activeGenres.some(obj => obj.id === genreId));
  if (isAboveRating && !containsGenre.every(el => el !== true)) {
    return (
      <tr>
        <td style={tableStyle.td}>
          {movie.title}
        </td>
        <td style={tableStyle.td}>
          {genres}
        </td>
        <td style={tableStyle.td}>
          <img alt={movie.title} src={baseMovieUrl + movie.poster_path} />
        </td>
        <td style={tableStyle.td}>
          {movie.vote_average}
        </td>
        <td style={tableStyle.td}>
          {movie.popularity}
        </td>
      </tr>
    );
  } return null;
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
  genres: PropTypes.string.isRequired,
  activeGenres: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
