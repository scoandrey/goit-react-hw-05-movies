import { getMovieDetails } from 'api/themoviedb';
import Container from 'components/Container/Container';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MovieList } from '../MovieList';
import Cast from '../Cast';
import Reviews from '../Reviews';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    getMovieDetails(movieId).then(setDetails);
  }, [movieId]);
  return (
    <>
      <Container>
        <NavLink className="nav-link" aria-current="page" to={'/'}>
          Back
        </NavLink>
        <MovieList details={details} />
        <h5>Additional information</h5>
        <ul
          style={{
            padding: '20px',
            borderTop: '2px solid gray',
            borderBottom: '2px solid gray',
          }}
        >
          <li>
            <NavLink
              className="nav-link"
              aria-current="page"
              to={`/movies/${movieId}/credits`}
            >
              <span className={css.cast}>Cast</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              aria-current="page"
              to={`/movies/${movieId}/reviews`}
            >
              <span className={css.reviews}>Reviews</span>
            </NavLink>
          </li>
        </ul>
        {location.pathname.includes('credits') && <Cast />}
        {location.pathname.includes('reviews') && <Reviews />}
      </Container>
    </>
  );
};

export default MovieDetails;
