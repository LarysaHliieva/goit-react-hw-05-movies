import { useState, useEffect } from 'react';

import MovieList from 'components/movieList/MovieList';

import { getTrendingMovies } from 'api/movies-api';

import styles from './Home.module.css';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const data = await getTrendingMovies();
        setItems(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchLists();
  }, []);

  return (
    <div className={styles.home}>
      <h2>Trending Today</h2>
      {Boolean(items.length) && <MovieList list={items} />}
    </div>
  );
};

export default Home;
