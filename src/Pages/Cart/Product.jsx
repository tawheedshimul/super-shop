import React, { useState } from 'react'
import './Product.css'
import Quantity from './Quantity'

function Product() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div >

            <div className="flex justify-between">
                <div className='m-auto w-1/12'>
                    <label className="checkbox-container">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <span className="checkmark">
                            {isChecked ? <span className="checker" /> : <span className="checklog" />}
                        </span>
                    </label>
                </div>
                <div className="flex flex-col justify-between ml-4 w-8/12 flex-grow">
                    <span className="font-bold text-sm">Iphone 6S</span>
                    <span className="text-gray-500 text-xs"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, libero? Exercitationem reprehenderit iure voluptatibus autem. </span>
                    <a href="#" className="font-semibold hover:text-red-500 text-red-500 text-xs">Remove</a>
                </div>
                <div className="w-3/12 mx-auto">
                    <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" />
                </div>
            </div>
            <div className='mt-4 '>
                <div className='flex justify-between border-b border-cyan-500 bg-cyan-100 p-2'>
                    <p>Price</p>
                    <p>$300</p>
                </div>
                <div className='flex justify-between border-b border-cyan-500 bg-cyan-100 p-2'>
                    <p>Size</p>
                    <select name="" id="" className="flex items-center border border-slate-400 bg-slate-50 px-2 text-sm text-black transition-colors duration-300 outline-0 hover:border hover:border-cyan-400">
                        <option value="s">Premium S</option>
                        <option value="l">Premium L</option>
                        <option value="xl">Premium XL</option>
                        <option value="xxl">Premium XXL</option>
                    </select>
                </div>
                <div className='flex justify-between border-b border-cyan-500 bg-cyan-100 p-2'>
                    <p>Quantity</p>
                    <Quantity></Quantity>
                </div>
                <div className='flex justify-between border-b border-cyan-500 bg-cyan-100 p-2'>
                    <p>Total Price</p>
                    <p>$300</p>
                </div>
            </div>

        </div>
    )
}

export default Product;