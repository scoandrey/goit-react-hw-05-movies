import React from 'react';
import { NavLink } from 'react-router-dom';

const Credits = ({ credits }) => {
  return (
    <>
      {credits.map(trend => (
        <li key={trend.id}>
          <NavLink
            to={`/movies/${trend.id}/credits`}
            className={'nav-link'}
            aria-current="page"
          >
            {trend.title ? trend.title : trend.name}
          </NavLink>
        </li>
      ))}
    </>
  );
};
export default Credits;
