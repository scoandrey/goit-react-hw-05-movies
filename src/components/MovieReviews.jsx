import React from 'react';
import { Link } from 'react-router-dom';

const MovieReviews = ({ movieReviews }) => {
  return (
    <ul>
      {movieReviews.map(trend => (
        <li key={trend.id}>
          <Link
            to={`/movies/${trend.id}/reviews`}
            className={'nav-link'}
            aria-current="page"
          >
            {trend.content}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieReviews;
