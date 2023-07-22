import React from 'react';
import { GiAllForOne } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const FixedFooter = () => {
    return (
        <footer className="bg-gray-200 py-2 fixed bottom-0 left-0 right-0">
            <div className="container mx-auto flex justify-around">
                <NavLink
                    to='/all'
                    className="flex items-center px-4 py-2 rounded-lg  focus:outline-none focus:ring focus:ring-gray-200">

                    {/* <RiShirtLine className="text-2xl mr-2" /> */}
                    <GiAllForOne></GiAllForOne>
                </NavLink>
                <NavLink
                    to='/mens'
                    className="flex items-center px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-gray-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="4" r="2" />
                        <path d="M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.7L9.7 19.3a1 1 0 0 1-1.4 0L5 15.6V18a2 2 0 0 0 2 2z" />
                    </svg>
                </NavLink>
                <NavLink
                    to='/women'
                    className="flex items-center px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-gray-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="5" r="2" />
                        <path d="M12 22s-6-3-6-8V6s3-2 6-2 6 2 6 2v8c0 5-6 8-6 8z" />
                    </svg>
                </NavLink>
                <NavLink
                to='/kids'
                className="flex items-center px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-gray-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="4" r="2" />
                        <path d="M12 2s-5 1.95-5 6v5s2 3 5 3 5-3 5-3V8s-5-1.95-5-6z" />
                        <path d="M12 15a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3" />
                    </svg>
                </NavLink>
            </div>
        </footer>
    );
};

export default FixedFooter;
