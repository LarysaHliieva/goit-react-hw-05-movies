import { Routes, Route } from 'react-router-dom';

import Layout from 'layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p>Home</p>} />
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
