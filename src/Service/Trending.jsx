import React from 'react';
import { Link } from 'react-router-dom';

const Trending = ({ trending }) => {
  return (
    <ul>
      {trending.map(trend => (
        <li key={trend.id}>
          <Link
            to={`/movies/${trend.id}`}
            className={'nav-link'}
            aria-current="page"
          >
            {trend.title ? trend.title : trend.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default Trending;
