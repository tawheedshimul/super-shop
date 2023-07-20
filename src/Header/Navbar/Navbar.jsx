import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import SearchBar from '../SearchBar/SearchBar';
import { IoIosHome } from 'react-icons/io';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

const ShoppingNavbar = () => {
  return (
    <>
      <Banner></Banner>
      <nav className="bg-gray-100 p-4 shadow fixed top-0 left-0 right-0 z-40">
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
              <Link className='text-black hover:text-blue-300'>
                <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M481-120v-60h299v-600H481v-60h299q24 0 42 18t18 42v600q0 24-18 42t-42 18H481Zm-55-185-43-43 102-102H120v-60h363L381-612l43-43 176 176-174 174Z" /></svg>
              </Link>
            </div>

            {/* cart section  */}
            <div className="relative ml-4">
              <Link className="text-black hover:text-blue-300">
                <GiShoppingCart className="text-2xl" />
              </Link>
              <span className="bg-red-500 text-white absolute -top-1 -right-1 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
            {/* contact section  */}
            <div className="ml-4">
              <Link to='/contact' className='text-black hover:text-blue-300'>
              <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M562-524h268v-186H562v186Zm135-37-105-79v-40l104 79 104-79v40l-103 79ZM60-120q-24 0-42-18T0-180v-600q0-24 18-42t42-18h840q24 0 42 18t18 42v600q0 24-18 42t-42 18H60Zm531-60h309v-600H60v600h7q44-69 112.5-109T329-329q81 0 149.5 40T591-180ZM329-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM143-180h372q-35.606-42.275-84.303-65.637Q382-269 329-269t-101.5 23.5Q179-222 143-180Zm186-280q-25.5 0-42.75-17.25T269-520q0-25.5 17.25-42.75T329-580q25.5 0 42.75 17.25T389-520q0 25.5-17.25 42.75T329-460Zm151-20Z"/></svg>
              </Link>
            </div>

          </div>
        </div>
        <div className='mt-2 block sm:hidden'>
          <SearchBar></SearchBar>
        </div>
      </nav>
    </>
  );
};

export default ShoppingNavbar;
