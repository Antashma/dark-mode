import React , { useEffect } from 'react';
import {useDarkMode} from '../hooks/useDarkMode'

const Navbar = () => {
  
  const [darkMode, setDarkMode] = useDarkMode(); //why no paaram?
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {  
    if (darkMode) {
      console.log('sg: navbar.js : dark mode is', darkMode)
      document.querySelector('.App').classList.add('dark-mode')
    } else {
      console.log('sg: navbar.js : dark mode is', darkMode)
      document.querySelector('.App').classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
