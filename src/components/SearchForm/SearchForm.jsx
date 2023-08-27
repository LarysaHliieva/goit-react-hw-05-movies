import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const onSubmitForm = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onSubmit(form.search.value);
    form.reset();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        className={styles.input}
        name="search"
        type="text"
        placeholder="Enter movie title"
      />
      <button className={styles.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
