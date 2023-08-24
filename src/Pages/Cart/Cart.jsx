import React from 'react';
import Product from './Product';

function ShoppingCart() {
    return (
        <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row shadow-md my-10">
                <div className="lg:w-3/4 bg-white px-4 lg:px-10 py-4 lg:py-10">
                    <div className="flex justify-between rounded lg:pb-4 bg-cyan-400 p-4">
                        <h1 className="font-semibold text-2xl text-white">You Like</h1>
                        <h2 className="font-semibold text-2xl text-white"><span className='text-cyan-400 bg-white rounded-full px-1'>03</span> Items</h2>
                    </div>
                    <div className="flex mt-5 mb-2 pb-2 border-b">
                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                    </div>
                    {/* Product 1 */}

                    <div className='border border-gray-300 rounded p-1'>
                        <Product></Product>
                    </div>
                    {/* Continue Shopping */}
                    <a href="#" className="flex font-semibold text-cyan-600 text-sm mt-10">
                        {/* ... */}Continue Shoping
                    </a>
                </div>
                <div id="summary" className="lg:w-1/4 px-4 lg:px-8 py-4 lg:py-10">
                    <h1 className="font-semibold bg-cyan-400 text-white rounded py-2 text-2xl">Order Summary</h1>
                    <hr className='mt-4' />
                    <div className="flex justify-between mt-4 mb-5">
                        <span className="font-semibold text-sm uppercase">Items 3</span>
                        <span className="font-semibold text-sm">590$</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select className="block p-2 text-gray-600 w-full text-sm border border-cyan-400 outline-2 outline-cyan-500">
                            <option>Standard shipping - $10.00</option>
                            <option>Standard shipping - $15.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full border-b-2 outline-0 border-cyan-400" />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                        </div>
                        <button className="bg-cyan-400 font-semibold hover:bg-cyan-500 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
