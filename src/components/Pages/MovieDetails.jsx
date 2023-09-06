import { getMovieDetails } from 'api/themoviedb';
import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MovieList } from './MovieList';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    getMovieDetails(movieId).then(setDetails);
  }, [movieId]);
  return (
    <Suspense>
      <Link className="nav-link" aria-current="page" to={'/'}>
        Back
      </Link>
      <MovieList details={details} />
      <p className="addInfo">{'Additional information'}</p>
      <ul>
        <li>
          <Link
            className="nav-link"
            aria-current="page"
            to={`/movies/${movieId}/credits`}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            aria-current="page"
            to={`/movies/${movieId}/reviews`}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </Suspense>
  );
};

export default MovieDetails;
