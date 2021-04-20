//key = 1196997f59e0ca5c29b939f29010ad6e
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1196997f59e0ca5c29b939f29010ad6e';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const getPopularMovies = async () => {
  return await axios.get(`/trending/all/day`).then(response => response.data);
};

const getSearchMovies = async query => {
  return await axios
    .get(`/search/movie?query=${query}`)
    .then(response => response.data);
};

const getDetailsMovie = async id => {
  return await axios.get(`/movie/${id}`).then(response => response.data);
};

const getCredits = async id => {
  return await axios
    .get(`/movie/${id}/credits`)
    .then(response => response.data);
};

const getReviews = async id => {
  return await axios
    .get(`/movie/${id}/reviews`)
    .then(response => response.data);
};

export {
  getPopularMovies,
  getSearchMovies,
  getDetailsMovie,
  getCredits,
  getReviews,
};
