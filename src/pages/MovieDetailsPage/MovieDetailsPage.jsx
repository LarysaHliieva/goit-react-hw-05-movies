import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

import { getMovieById } from 'api/movies-api';

import fotoDefault from 'components/photoDefault.avif';

import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (response) {
        console.log(response.data.message);
        setError(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [setIsLoading, movieId]);

  return (
    <div className={styles.movieDetails}>
      {isLoading && <p>Loading...</p>}
      {error && <p>😥 Something went wrong... Please, reload and try again!</p>}
      {movie && (
        <>
          <Link>Go back</Link>
          <div className={styles.movieCard}>
            <img
              className={styles.poster}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                  : fotoDefault
              }
              alt={movie.title}
            />
            <div className={styles.description}>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>
                User Score:
                {movie.vote_average &&
                  ` ${Math.trunc(movie.vote_average * 10)}%`}
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>
                {movie.genres
                  ?.reduce((acc, { name }) => `${acc}, ${name}`, '')
                  .slice(2)}
              </p>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to={'cast'} className={styles.additionalLink}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to={'reviews'} className={styles.additionalLink}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
