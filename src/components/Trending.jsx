import React from 'react';
import { NavLink } from 'react-router-dom';

const Trending = ({ trending }) => {
  return (
    <ul>
      {trending.map(trend => (
        <li key={trend.id}>
          <NavLink
            to={`/movies/${trend.id}`}
            className={'nav-link'}
            aria-current="page"
          >
            {trend.title ? trend.title : trend.original_name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Trending;
