import axios from 'axios';

axios.defaults.baseURL = 'http://api.themoviedb.org/3';
const apiKey = '3ea4d57f6ff7a488e31a85369041c84d';

export const getTrending = async () => {
  const url = `/trending/all/week?api_key=${apiKey}`;
  const trending = await axios(url);
  return trending.data;
};

export const getMovieDetails = async id => {
  const url = `/movie/${id}?api_key=${apiKey}`;
  const details = await axios(url);
  return details.data;
};

export const getMovieCredits = async id => {
  const url = `/movie/${id}/credits?api_key=${apiKey}`;
  const credits = await axios(url);
  return credits.data;
};

export const getMovieReviews = async id => {
  const url = `/movie/${id}/reviews?api_key=${apiKey}`;
  const reviews = await axios(url);
  return reviews.data;
};


export const getMoviesByName = async name => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=${apiKey}`
  const movies = await axios(url);
  return movies.data.results;
};

