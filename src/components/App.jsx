import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
import { lazy } from 'react';

const Home = lazy(() => import('./Pages/Home'));
const Movies = lazy(() => import('./Pages/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Pages/Cast'));
const Reviews = lazy(() => import('./Pages/Reviews'));

export const App = () => {
  const onSubmit = () => {
    return <></>;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies onSubmit={onSubmit} />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/credits" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};