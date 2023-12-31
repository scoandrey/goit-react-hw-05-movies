import React from 'react';
import css from './Credits.module.css';

const Credits = ({ credits }) => {
  return (
    <>
      <ul className={css.creditsList}>
        {credits.map(trend => (
          <li key={trend.id} className={css.creditsItem}>
            <h5>{trend.title ? trend.title : trend.name}</h5>
            {
              <img
                src={`https://image.tmdb.org/t/p/w500/${trend.profile_path}`}
                alt={`${trend.name}`}
              />
            }
          </li>
        ))}
      </ul>
    </>
  );
};
export default Credits;
