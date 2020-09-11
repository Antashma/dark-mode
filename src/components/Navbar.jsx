import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode'
import { useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {  
    if (darkMode) {
      console.log('dark mode on')
      document.querySelector('.App').classList.toggle('dark-mode')
    } else {
      console.log('sg: navbar.js : dark mode off')
      document.querySelector('.App').classList.toggle('dark-mode')
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
