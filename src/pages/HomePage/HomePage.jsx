import { useState, useEffect } from 'react';

import MovieList from 'components/movieList/MovieList';

import { getTrendingMovies } from 'api/movies-api';

import styles from './HomePage.module.css';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        setItems(data.results);
      } catch (response) {
        console.log(response.data.message);
        setError(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLists();
  }, [setIsLoading]);

  return (
    <div className={styles.home}>
      <h2>Trending Today</h2>
      {isLoading && <p>Loading...</p>}
      {Boolean(items.length) && <MovieList list={items} />}
      {error && <p>😥 Something went wrong... Please, reload and try again!</p>}
    </div>
  );
};

export default HomePage;
