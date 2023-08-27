import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = props => {
  return (
    <header className={styles.header}>
      <ul className={styles.navMenu}>
        <li className={styles.navMenuItem}>
          <NavLink className={styles.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.navMenuItem}>
          <NavLink className={styles.navLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
