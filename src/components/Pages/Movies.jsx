import React from 'react';


const Movies = () => {
  // const handleChange = ({ target }) => {
  //   setSearchParams({ filter: target.value });
  // };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            // onChange={handleChange}
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
