// MobileNav.js
import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const MobileSearch = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger icon / Cross button */}
      <div className="flex items-center justify-end px-4 py-2">
        <button
          onClick={toggleMenu}
          className="text-gray-500 focus:outline-none focus:text-gray-600"
        >
          {isMenuOpen ? (
            // Cross button when menu is open
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              width="25"
              height="25"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'
          } md:hidden transition-opacity duration-300`}
      >
        <div className="bg-white divide-y divide-gray-100">
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
