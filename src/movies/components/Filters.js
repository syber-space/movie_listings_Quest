import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as moviesActionCreators from '../actionCreators';
import * as filterActionCreators from '../../filters/actionCreators';
import * as globalSelectors from '../../app/selectors';
import filterStyle from '../styles/filter.style';

const ratingArr = [];
for (let i = 0; i <= 10; i += 0.5) {
  ratingArr.push(i);
}

class Filters extends Component {
  componentDidMount() {
    const {
      retrieveGenres,
    } = this.props;

    retrieveGenres();
  }

  isChecked(name) {
    const { activeGenres } = this.props;
    return activeGenres.some(obj => obj.name === name);
  }

  genreChange(genre, isChecked) {
    const { handleGenreChange } = this.props;
    handleGenreChange(genre, isChecked);
  }

  ratingChange(rating) {
    const { handleRatingChange } = this.props;
    handleRatingChange(Number(rating.target.value));
  }

  render() {
    const {
      allGenres,
      activeGenres,
      rating,
    } = this.props;

    return (
      <div style={filterStyle.main}>
        <form>
          <label>
            Genres:
            <ul className="list-unstyled" style={filterStyle.genreRow}>
              {allGenres && (
                allGenres.map((el) => {
                  const isChecked = activeGenres.some(obj => obj.name === el.name);
                  return (
                    <li key={el.id} className="col-md-6">
                      <input
                        name="rating"
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => this.genreChange(el, isChecked)}
                      />
                      {el.name}
                    </li>
                  );
                })
              )}
            </ul>
          </label>
          <br />
          <label>
            <div style={filterStyle.ratingRow}>
              Minimum Rating:
              <select
                name="genre"
                value={rating}
                onChange={newRating => this.ratingChange(newRating)}
              >
                {ratingArr.map(x => (
                  <option value={x} key={x}>
                    {x}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </form>
      </div>
    );
  }
}

Filters.propTypes = {
  retrieveGenres: PropTypes.func.isRequired,
  allGenres: PropTypes.array,
  activeGenres: PropTypes.array,
  rating: PropTypes.number.isRequired,
  handleGenreChange: PropTypes.func.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
};

Filters.defaultProps = {
  allGenres: undefined,
  activeGenres: undefined,
};

const mapStateToProps = state => ({
  allGenres: globalSelectors.getGenres(state),
  activeGenres: globalSelectors.getActiveGenres(state),
  rating: globalSelectors.getRating(state),
});

const mapDispatchToProps = dispatch => ({
  retrieveGenres: () => dispatch(moviesActionCreators.retrieveGenres()),
  applyGenres: () => dispatch(filterActionCreators.applyGenres()),
  handleGenreChange: (genre, isChecked) => dispatch(filterActionCreators.handleGenreChange(genre, isChecked)),
  handleRatingChange: rating => dispatch(filterActionCreators.handleRatingChange(rating)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
