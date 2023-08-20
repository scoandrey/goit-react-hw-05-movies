import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" />
        </Route>
      </Routes>
    </div>
  );
};
