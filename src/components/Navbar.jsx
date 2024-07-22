import React, { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => setNav(!nav);
  const toggleTheme = () => setDarkMode(!darkMode);

  // Update body class based on dark mode
  if (darkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 dark:text-gray-200 text-lg">JobIndeed</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-4 px-2 text-blue-500 border-b-4 border-blue-500 font-semibold">Home</a>
              <a href="#" className="py-4 px-2 text-gray-500 dark:text-gray-200 hover:text-blue-500 transition duration-300">About</a>
              <a href="#" className="py-4 px-2 text-gray-500 dark:text-gray-200 hover:text-blue-500 transition duration-300">Courses</a>
              <a href="#" className="py-4 px-2 text-gray-500 dark:text-gray-200 hover:text-blue-500 transition duration-300">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <div className="md:hidden flex items-center">
              <button onClick={handleClick} className="text-gray-500 dark:text-gray-200 focus:outline-none">
                {nav ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${nav ? "block" : "hidden"} bg-white dark:bg-gray-900`}>
        <a href="#" className="block py-2 px-4 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Home</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">About</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Courses</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
