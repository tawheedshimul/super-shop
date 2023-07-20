import React from 'react';
import Navbar from '../../Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import FixedFooter from '../../Footer/FixedFooter/FixedFooter';

const Main = () => {
    return (
        <div>
            <div className='mb-20'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <FixedFooter></FixedFooter>
            
        </div>
    );
};

export default Main;