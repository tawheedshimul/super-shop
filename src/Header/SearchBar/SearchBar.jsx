import React from 'react'
import './SearchBar.css'
import { IoMdSearch } from 'react-icons/io';

function SearchBar() {
    return (
        <div className="relative">
            <div className='relative flex h-10 w-full overflow-clip'>
                <select name="product-names" id="product-names" className="flex items-center border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300">
                    <option value="rigatoni">All</option>
                    <option value="dave">Men</option>
                    <option value="pumpernickel">Women</option>
                    <option value="reeses">Kids</option>
                </select>
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