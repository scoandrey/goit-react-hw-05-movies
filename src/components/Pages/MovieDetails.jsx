import { getMovieDetails } from 'api/themoviedb';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getMovieDetails(movieId).then(data => setDetails(data));
  }, []);
  return <>{JSON.stringify(details, 2, null)}</>;
};

export default MovieDetails;
