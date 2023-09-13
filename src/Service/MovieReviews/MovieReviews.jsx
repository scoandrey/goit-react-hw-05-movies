import Container from 'components/Container/Container';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieReviews = ({ movieReviews }) => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};
export default MovieReviews;
