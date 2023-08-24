import React from 'react'
import './SearchBar.css'

function SearchBar() {
    return (
        <div className="relative">
            <div className='relative flex h-10 w-full overflow-clip'>
                <select name="product-names" id="product-names" className="flex items-center border border-slate-400 bg-slate-50 px-2 text-sm text-black transition-colors duration-300 outline-0 hover:border hover:border-cyan-400">
                    <option value="all">All</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                </select>
                <input
                    type="text"
                    placeholder="Search Products"
                    className="h-10 w-full border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
                />
            </div>
        </div>
    )
}

export default SearchBar