import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='mb-24'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className='mt-5'>
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Main;