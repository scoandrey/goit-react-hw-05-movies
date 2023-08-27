import { getMovieReviews } from 'api/themoviedb';
import MovieReviews from 'components/MovieReviews';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  useEffect(() => {
    getMovieReviews(movieId).then(movieReviews =>
      setMovieReviews(movieReviews.results)
    );
  }, [movieId]);
  return (
    <>
      <MovieReviews movieReviews={movieReviews} />
    </>
  );
};

export default Reviews;
