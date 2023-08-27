import { getMovieCredits } from 'api/themoviedb';
import Credits from 'components/Credits';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    getMovieCredits(movieId).then(credits => setCredits(credits.cast));
  }, [movieId]);
  return (
    <>
      <Credits credits={credits} />
    </>
  );
};

export default Cast;
