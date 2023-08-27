import { Routes, Route } from 'react-router-dom';

import Layout from 'layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<p>Cast</p>} />
            <Route path="reviews" element={<p>Reviews</p>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
