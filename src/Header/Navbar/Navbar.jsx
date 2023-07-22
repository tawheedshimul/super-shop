import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { IoIosHome } from 'react-icons/io';
import Banner from '../Banner/Banner';
import { Link, NavLink } from 'react-router-dom';


const ShoppingNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Banner></Banner>
      <nav className="bg-gray-100 p-4 shadow fixed top-0 left-0 right-0 z-40">
        <div className="flex items-center justify-between container mx-auto">

          <NavLink to='/' className='flex items-center rounded mr-1 bg-gray-300 hover:bg-cyan-400 hover:text-white'>
            {/* hemberger menu  */}
            <div className='flex items-center'>
              <IoIosHome className='text-3xl'></IoIosHome>
              <div className="mx-2 h-10 border-r border-gray-500"></div>
            </div>

            {/* logos section  */}
            <div className="mr-4 flex font-bold items-center">
              Super-Shop
            </div>
          </NavLink>

          {/* search section */}
          <div className='hidden sm:block flex-grow'>
            <SearchBar></SearchBar>
          </div>

          <div className='flex items-center'>


            {/* mobile search  */}
            <button
              onClick={toggleMenu}
              className="md:hidden"
            >
              {isMenuOpen ? (
                // Cross button when menu is open
                <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M270-80q-78 0-134-56T80-270q0-78 56-134t134-56q78 0 134 56t56 134q0 78-56 134T270-80Zm566-40L573-383q-14 11-31.5 21.5T508-344q-5-14-11-28.5T483-399q54-21 91.5-69.5T612-584q0-81-57-138.5T417-780q-82 0-139.5 57.5T220-584q0 17 3.5 35.5T232-517q-13 2-29 6.5T174-500q-7-18-10.5-40t-3.5-44q0-107 75-181.5T417-840q106 0 180.5 75T672-584q0 43-15 85t-41 73l264 262-44 44Zm-635-56 69-69 68 68 23-23-69-69 71-71-23-23-70 70-70-70-23 23 70 70-70 70 24 24Z" /></svg>
              ) : (
                // Hamburger icon when menu is closed
                <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg>
              )}
            </button>
            {/* MobileSearch end  */}
            {/* login section  */}
            <div className="ml-4">
              <Link className='text-black hover:text-blue-300'>
                <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M481-120v-60h299v-600H481v-60h299q24 0 42 18t18 42v600q0 24-18 42t-42 18H481Zm-55-185-43-43 102-102H120v-60h363L381-612l43-43 176 176-174 174Z" /></svg>
              </Link>
            </div>

            {/* cart section  */}
            <div className="relative ml-4">
              <Link className="text-black hover:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg>
              </Link>
              <span className="bg-red-500 text-white absolute -top-1 -right-1 text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
            {/* contact section  */}
            {/* <div className="ml-4">
              <Link to='/contact' className='text-black hover:text-blue-300'>
                <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M562-524h268v-186H562v186Zm135-37-105-79v-40l104 79 104-79v40l-103 79ZM60-120q-24 0-42-18T0-180v-600q0-24 18-42t42-18h840q24 0 42 18t18 42v600q0 24-18 42t-42 18H60Zm531-60h309v-600H60v600h7q44-69 112.5-109T329-329q81 0 149.5 40T591-180ZM329-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM143-180h372q-35.606-42.275-84.303-65.637Q382-269 329-269t-101.5 23.5Q179-222 143-180Zm186-280q-25.5 0-42.75-17.25T269-520q0-25.5 17.25-42.75T329-580q25.5 0 42.75 17.25T389-520q0 25.5-17.25 42.75T329-460Zm151-20Z" /></svg>
              </Link>
            </div> */}

          </div>
        </div>
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'
            } md:hidden transition-opacity duration-300`}
        >
          <div className="bg-white divide-y divide-gray-100">
            <SearchBar></SearchBar>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ShoppingNavbar;
