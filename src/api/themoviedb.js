import axios from 'axios';

axios.defaults.baseURL = 'http://api.themoviedb.org/3';
const apiKey = '3ea4d57f6ff7a488e31a85369041c84d';

export const getTrending = async () => {
  const url = `/trending/all/week?api_key=${apiKey}`;
  const trending = await axios(url);
  return trending.data;
};
