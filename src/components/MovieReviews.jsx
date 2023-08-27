import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieReviews = ({ movieReviews }) => {
  return (
    <ul>
      {movieReviews.map(trend => (
        <li key={trend.id}>
          <NavLink
            to={`/movies/${trend.id}/reviews`}
            className={'nav-link'}
            aria-current="page"
          >
            {trend.content}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default MovieReviews;
