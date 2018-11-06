import axios from 'axios';

const baseMovieUrl = 'https://api.themoviedb.org/3';
const apiKey = '6f8d0fbacc41b96f1f9dbabbc6f70488';

export const getMovies = () => (
  axios.get(`${baseMovieUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
    .then(({ status, data }) => {
      if (status !== 200 || !(data && data.results && data.results.length)) {
        throw new Error('Error retrieving movies');
      }
      data.results.sort((a, b) => b.popularity - a.popularity);
      return data;
    })
);

export const getGenres = () => (
  axios.get(`${baseMovieUrl}/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then(({ status, data }) => {
      if (status !== 200 || !(data && data.genres && data.genres.length)) {
        throw new Error('Error retrieving genres');
      }
      return data;
    })
);
