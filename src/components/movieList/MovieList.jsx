import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './MovieList.module.css';

const MovieList = ({ list }) => {
  return (
    <ul className={styles.movieList}>
      {list.map(({ id, title }) => (
        <li key={id}>
          <Link className={styles.movie}>{title}</Link>
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
