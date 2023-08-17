import React from 'react';
import { NavLink } from 'react-router-dom';
import Women from '../../assets/women.png'
import Kids from '../../assets/kids.png'
import Mens from '../../assets/men.png'
import All from '../../assets/allproduct.png'

const FixedFooter = () => {
    return (
        <footer className="bg-gray-200 py-2 fixed bottom-0 left-0 right-0 z-40">
            <div className="container mx-auto flex justify-around">
                <NavLink
                    to='/all'
                    className="flex items-center px-4 py-2 rounded-lg  focus:outline-none focus:ring focus:ring-gray-200">
                    {/* <img className='h-8' src={All} alt="allproduct" /> */}
                    <p className='font-semibold hover:text-cyan-800'>ALL</p>

                </NavLink>
                <NavLink
                    to='/mens'
                    className="flex items-center px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-gray-200">
                    {/* <img className='h-8' src={Mens} alt="Mens" /> */}
                    <p className='font-semibold hover:text-cyan-800'>MEN</p>
                </NavLink>
                <NavLink
                    to='/women'
                    className="flex items-center  px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-gray-200">
                    {/* <img className='h-8' src={Women} alt="Women"/> */}
                    <p className='font-semibold hover:text-cyan-800'>WOMEN</p>
                </NavLink>
                <NavLink
                    to='/kids'
                    className="flex items-center px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-gray-200">
                    {/* <img className='h-8' src={Kids} alt="kids" srcset="" /> */}
                    <p className='font-semibold hover:text-cyan-800'>KIDS</p>
                </NavLink>
            </div>
        </footer>
    );
};

export default FixedFooter;
