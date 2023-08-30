import React from 'react';
import { Link } from 'react-router-dom';

const Credits = ({ credits }) => {
  return (
    <>
      {credits.map(trend => (
        <li key={trend.id}>
          <Link
            to={`/movies/${trend.id}/credits`}
            className={'nav-link'}
            aria-current="page"
          >
            {trend.title ? trend.title : trend.name}
          </Link>
        </li>
      ))}
    </>
  );
};
export default Credits;
