import { getMovieDetails } from 'api/themoviedb';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getMovieDetails(movieId).then(data => setDetails(data));
  }, [movieId]);
  return (
    <>
      {JSON.stringify(details)}
      <ul>
        <li>
          <NavLink
            className="nav-link"
            aria-current="page"
            to={`/movies/${movieId}/credits`}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            aria-current="page"
            to={`/movies/${movieId}/reviews`}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MovieDetails;
