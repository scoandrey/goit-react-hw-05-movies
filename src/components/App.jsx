import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import MovieDetails from './Pages/MovieDetails';
import Cast from './Pages/Cast';
import Reviews from './Pages/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/credits" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
