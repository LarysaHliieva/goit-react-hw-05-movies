import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './MovieList.module.css';

const MovieList = ({ list }) => {
  const location = useLocation();

  return (
    <ul className={styles.movieList}>
      {list.map(({ id, title }) => (
        <li key={id}>
          <Link
            className={styles.movie}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};
