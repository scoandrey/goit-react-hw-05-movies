import { Routes, Route } from 'react-router-dom';
import Home from 'Page/Home';
import Movies from 'Page/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};

// 3ea4d57f6ff7a488e31a85369041c84d