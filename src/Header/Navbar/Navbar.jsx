import React from 'react';
import { GiLockedBox, GiShoppingCart } from 'react-icons/gi';
import SearchBar from '../SearchBar/SearchBar';
import { IoIosHome } from 'react-icons/io';

const ShoppingNavbar = () => {
  return (
    <nav className="bg-white p-4 shadow fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center justify-between container mx-auto">

        <div className='flex items-center'>
          {/* hemberger menu  */}
          <div className='flex items-center'>
            <IoIosHome className='text-3xl text-gray-500'></IoIosHome>
            <div className="mx-2 h-10 border-r border-gray-500"></div>
          </div>

          {/* logos section  */}
          <div className="mr-4 flex items-center">
            <a href="/" className="text-black text-xl font-semibold hover:text-blue-300">
              Super-Shop
            </a>
          </div>
        </div>

        {/* search section */}
        <div className='hidden sm:block flex-grow'>
          <SearchBar></SearchBar>
        </div>

        <div className='flex items-center'>
          {/* login section  */}
          <div className="ml-4">
            <button className='text-black hover:text-blue-300'>
              <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M481-120v-60h299v-600H481v-60h299q24 0 42 18t18 42v600q0 24-18 42t-42 18H481Zm-55-185-43-43 102-102H120v-60h363L381-612l43-43 176 176-174 174Z" /></svg>
            </button>
          </div>

          {/* cart section  */}
          <div className="relative ml-4">
            <button className="text-black hover:text-blue-300">
              <GiShoppingCart className="text-2xl" />
            </button>
            <span className="bg-red-500 text-white absolute -top-1 -right-1 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
      <div className='mt-2 block sm:hidden'>
        <SearchBar></SearchBar>
      </div>
    </nav>
  );
};

export default ShoppingNavbar;
