import React from 'react';

function ShoppingCart() {
    return (
        <div className="container mx-auto mt-24">
            <div className="flex flex-col lg:flex-row shadow-md my-10">
                <div className="lg:w-3/4 bg-white px-4 lg:px-10 py-4 lg:py-10">
                    <div className="flex justify-between border-b pb-4 lg:pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">3 Items</h2>
                    </div>
                    <div className="flex mt-10 mb-5">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                    </div>
                    {/* Product 1 */}
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
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
                            {/* Quantity buttons */}
                        </div>
                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
                    </div>
                    {/* Product 2 */}
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        {/* ... */}
                    </div>
                    {/* Product 3 */}
                    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        {/* ... */}
                    </div>
                    {/* Continue Shopping */}
                    <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        {/* ... */}
                    </a>
                </div>
                <div id="summary" className="lg:w-1/4 px-4 lg:px-8 py-4 lg:py-10">
                    <h1 className="font-semibold text-2xl border-b pb-4">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items 3</span>
                        <span className="font-semibold text-sm">590$</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                        </div>
                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
