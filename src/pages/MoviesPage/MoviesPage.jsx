import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/movieList/MovieList';

import { getMoviesBySearch } from 'api/movies-api';

import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const fetchListsBySeach = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesBySearch(searchQuery);
        setItems(data.results);
      } catch (response) {
        console.log(response.data.message);
        setError(response.data.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchListsBySeach();
  }, [searchQuery]);

  const onSubmit = searchValue => {
    setSearchParams({ search: searchValue });
    setItems([]);
  };

  return (
    <div className={styles.movies}>
      <SearchForm onSubmit={onSubmit} />
      {isLoading && <p>Loading...</p>}
      {Boolean(items.length) && <MovieList list={items} />}
      {error && <p>😥 Something went wrong... Please, reload and try again!</p>}
    </div>
  );
};

export default MoviesPage;
