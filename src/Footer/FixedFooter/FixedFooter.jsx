import React from 'react';
import { GiAllForOne } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-2">
      <div className="container mx-auto flex justify-around">
        <button className="flex items-center bg-blue-300 px-4 py-2 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300">
          {/* <RiShirtLine className="text-2xl mr-2" /> */}
          <GiAllForOne></GiAllForOne>
          <span>All</span>
        </button>
        <button className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-200">
          {/* <RiMenLine className="text-2xl mr-2" /> */}
          
          <span>Mens</span>
        </button>
        <button className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-200">
          {/* <RiWomenLine className="text-2xl mr-2" /> */}
          <span>Womens</span>
        </button>
        <button className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-200">
          {/* <RiChildLine className="text-2xl mr-2" /> */}
          <span>Kids</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
