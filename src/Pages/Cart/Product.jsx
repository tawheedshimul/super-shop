import React from 'react'
import Quantity from './Quantity'

function Product() {
    return (
        <div className="flex items-center -mx-6 px-6">
            <div className="flex w-2/5">
                <div className="w-20">
                    <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">Iphone 6S</span>
                    <span className="text-red-500 text-xs">Apple</span>
                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                </div>
            </div>
            <div className="flex justify-center w-1/5">
                <Quantity></Quantity>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
            <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
        </div>
    )
}

export default Product;