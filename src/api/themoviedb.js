const apiKey = '3ea4d57f6ff7a488e31a85369041c84d';
const baseUrl = 'http://api.themoviedb.org/3/movie/11';

export const getTrending = async () => {
  const url = `${baseUrl}/trending/get-trending`;
  const trending = await fetch(url, {
    headers: { Authentication: `Bearer ${apiKey}` },
  });
  return trending;
};
