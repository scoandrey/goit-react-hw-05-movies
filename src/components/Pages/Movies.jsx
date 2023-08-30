import React, { useState } from 'react';

const Movies = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
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
  );
};
export default Movies;
