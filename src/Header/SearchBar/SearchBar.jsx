import React from 'react'
import { IoMdArrowDropdown, IoMdSearch } from 'react-icons/io';

function SearchBar() {
    return (
        <div className="relative">
            <div className='relative flex h-10 w-full overflow-clip'>
                <button className="flex items-center border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300">
                    <p className="mr-1">Products</p>
                    <IoMdArrowDropdown className="text-xl" />
                </button>
                <input
                    type="text"
                    placeholder="Search Products by Titles or Tag"
                    className="h-10 w-full border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black">
                    <IoMdSearch />
                </button>
            </div>
        </div>
    )
}

export default SearchBar