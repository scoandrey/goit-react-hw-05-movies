const apiKey = '3ea4d57f6ff7a488e31a85369041c84d';
const baseUrl = 'http://api.themoviedb.org/3';
const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWE0ZDU3ZjZmZjdhNDg4ZTMxYTg1MzY5MDQxYzg0ZCIsInN1YiI6IjY0ZGI4YjJmMzcxMDk3MDBjNTFjYjRlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OkcJzK4HyohXmqPBRVK7FTxxqpyYESwU9v_gxvkO73g'

export const getTrending = async () => {
  const url = `${baseUrl}/trending/all/week?api_key=${apiKey}`;
  const trending = await fetch(url, {
    headers: { Authentication: `Bearer ${apiToken}` },
  });
  return trending;
};
