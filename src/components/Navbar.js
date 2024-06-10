import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './features/theme/themeSlices';

const Navbar = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-right">
        <ul className="navbar-list">
          <li className="navbar-item"><Link to="/" className={`navbar-link ${isDarkMode ? 'dark-theme-text' : 'light-theme-text'}`}>Home</Link></li>
          <li className="navbar-item"><Link to="/contact" className={`navbar-link ${isDarkMode ? 'dark-theme-text' : 'light-theme-text'}`}>Contact Us</Link></li>
          <li className="navbar-item"><Link to="/task" className={`navbar-link ${isDarkMode ? 'dark-theme-text' : 'light-theme-text'}`}>TaskPage</Link></li>
        </ul>
        <button onClick={toggleThemeHandler} className={`toggle-theme-button ${isDarkMode ? 'dark-theme-button' : 'light-theme-button'}`}>Toggle Theme</button>
      </div>
    </nav>
  );
}

export default Navbar;
