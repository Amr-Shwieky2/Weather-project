import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainNavBar.module.css'; // Import the CSS module

const MainNavBar = () => {
  return (
    
      <nav className={styles.menu2}> {/* Use className to apply the CSS module */}
        <menu>
          <li>
            <Link to="/" className={styles.selected}>Home</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/Forecast">Forecast</Link>
          </li>
          
          <li>
            <Link to="/SignIn">SignIn</Link>
          </li>
        </menu>
      </nav>
   
  );
};

export default MainNavBar;
