import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='mb-10'>
            <Navbar></Navbar>
            </div>
            <div className='mt-16'>
            <Outlet></Outlet>
            </div>
            <div className='mt-16'>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Main;