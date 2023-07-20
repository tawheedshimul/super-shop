import React from 'react';
import { GiLockedBox, GiShoppingCart } from 'react-icons/gi';
import SearchBar from '../SearchBar/SearchBar';
import { IoIosHome } from 'react-icons/io';

const ShoppingNavbar = () => {
  return (
    <nav className="bg-white p-4 shadow fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between container mx-auto">

        {/* hemberger menu  */}
        <div className='flex items-center'>
          <IoIosHome className='text-3xl text-gray-500'></IoIosHome>
          <div className="mx-2 h-10 border-r border-gray-500"></div>
        </div>



        {/* logos section  */}
        <div className="flex items-center">
          <a href="/" className="text-black text-xl font-semibold hover:text-blue-300">
            Super-Shop
          </a>
        </div>

        {/* shoping section  */}
        <div className="hidden md:flex items-center ml-4">

        </div>

        {/* search section */}
        <div className='hidden sm:block flex-grow'>
          <SearchBar></SearchBar>
        </div>

        {/* login section  */}
        <div className="ml-4">
          <button className='text-black hover:text-blue-300'>
            <GiLockedBox className='text-2xl'></GiLockedBox>
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
      <div className='mt-2 block sm:hidden'>
      <SearchBar></SearchBar>
      </div>
    </nav>
  );
};

export default ShoppingNavbar;
