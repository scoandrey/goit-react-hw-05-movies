import { getMoviesByName } from 'api/themoviedb';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    getMoviesByName(value).then(setList);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              value={value}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={e => setValue(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <ul>
        {list.map(item => {
          return (
            <li key={item.id}>
              <Link
                className="nav-link"
                aria-current="page"
                to={`/movies/${item.id}`}
              >
                {item.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Movies;
