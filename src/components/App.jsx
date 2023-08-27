import { Routes, Route } from 'react-router-dom';

import Layout from 'layout/Layout';
import Home from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<p>Movies</p>} />
          <Route path="/movies/:movieId" element={<p>MovieDetails</p>}>
            <Route path="cast" element={<p>Cast</p>} />
            <Route path="reviews" element={<p>Reviews</p>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
