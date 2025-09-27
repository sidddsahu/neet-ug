"use client";
import { useState, useEffect, useRef } from "react";
import { FaSearch, FaBell, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = ({ onMenuClick, darkMode, setDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className='bg-white dark:bg-gray-800 shadow-sm p-4 flex justify-between items-center sticky top-0 z-40 transition-colors duration-200'>
      {/* Left Section */}
      <div className='flex items-center space-x-4'>
        {/* Hamburger Menu */}
        <button
          onClick={onMenuClick}
          className='p-2 rounded-lg block md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          aria-label='Toggle menu'
        >
          <FiMenu className='text-gray-600 dark:text-gray-300' size={20} />
        </button>

        {/* Dashboard Title */}
        <h1 className='text-sm md:text-xl font-semibold text-gray-800 dark:text-white'>
          Admin Dashboard
        </h1>
      </div>

      {/* Right Section */}
      <div className='flex items-center space-x-4'>
        {/* Search (optional) */}
        {/* <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-48 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-400" />
        </div> */}

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          aria-label='Toggle dark mode'
        >
          {darkMode ? (
            <FaSun className='text-yellow-400' size={18} />
          ) : (
            <FaMoon className='text-gray-600 dark:text-gray-300' size={18} />
          )}
        </button>

        {/* Notifications */}
        {/* <button
          className="p-2 relative rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Notifications"
        >
          <FaBell className="text-gray-600 dark:text-gray-300" size={18} />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button> */}

        {/* User Profile */}
        <div className='relative' ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className='flex items-center  space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full p-1'
            aria-label='User menu'
          >
            <div className='h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium'>
              <span>A</span>
            </div>
            <span className='text-gray-700 dark:text-gray-300 hidden md:block text-sm font-medium'>
              Admin
            </span>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg py-1 border border-gray-200 dark:border-gray-600 z-50 transition-all duration-200 transform origin-top-right'>
              <a
                href='#'
                className='block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm'
              >
                Profile Settings
              </a>
              <a
                href='#'
                className='block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm'
              >
                Account Settings
              </a>
              <a
                href='/user/logout'
                className='block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-sm'
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
