import React from 'react'
import { IoMdArrowDropdown, IoMdSearch } from 'react-icons/io';

function SearchBar() {
    return (
        <div className="relative">
            <div className='flex'>
                <button className="text-black flex items-center bg-blue-300 px-2">
                    <p className="mr-1">Products</p>
                    <IoMdArrowDropdown className="text-xl" />
                </button>
                <input
                    type="text"
                    placeholder="Search Products by Titles or Tag"
                    className="bg-gray-200 text-black px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 focus:ring-1"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black">
                    <IoMdSearch />
                </button>
            </div>
        </div>
    )
}

export default SearchBar