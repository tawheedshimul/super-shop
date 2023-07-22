import React from 'react';
import { NavLink } from 'react-router-dom';

const FixedFooter = () => {
    return (
        <footer className="bg-gray-200 py-2 fixed bottom-0 left-0 right-0">
            <div className="container mx-auto flex justify-around">
                <NavLink
                    to='/all'
                    className="flex items-center px-4 py-2 rounded-lg  focus:outline-none focus:ring focus:ring-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M165-480 45-688l264-152h51q16 45 45 82.5t75 37.5q47 0 76-37.5t44-82.5h51l263 153-119 207-75-41v216l-60 51v-369l113 62 59-104-188-110q-26 53-70 84t-94 31q-49 0-93.5-31T316-775L127-665l61 104 112-62v225q-15 2-30.5 6.5T240-380v-141l-75 41Zm22 291-39-46 79-67q23-19 51-29t57-10q29 0 56.5 10t50.5 29l116 99q14 12 31.5 17.5T626-180q18 0 36-5.5t32-17.5l79-69 39 47-79 67q-23 19-50.5 28.5T626-120q-29 0-57-9.5T518-158l-115-99q-14-12-32-17.5t-36-5.5q-19 0-36.5 5.5T267-257l-80 68Zm293-471Z" /></svg>

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
