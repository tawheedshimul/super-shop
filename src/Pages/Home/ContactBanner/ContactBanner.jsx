import React from 'react';

function ContactBanner() {
    return (
        <div className='grid md:grid-cols-2 bg-gray-600 p-6 md:p-10 gap-6 md:gap-10 shadow-lg'>
            {/* Left Column */}
            <div className='flex flex-col justify-center space-y-4'>
                <div className='flex items-center space-x-2 mx-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="16" height="16">
                        <path fill="#FFFFFF" d="M59.4 6.6H4.6C2.1 6.6 0 8.7 0 11.2v41.6c0 2.5 2.1 4.6 4.6 4.6h54.8c2.5 0 4.6-2.1 4.6-4.6V11.2c0-2.5-2.1-4.6-4.6-4.6zm-2.5 4.6L32 35.5 7.1 11.2h49.8zM2.5 52.8V11.2c0-0.7 0.6-1.3 1.3-1.3H32l-8.9 9 8.9 9H3.8c-0.7 0-1.3-0.6-1.3-1.3v41.6c0 0.7 0.6 1.3 1.3 1.3h54.8c0.7 0 1.3-0.6 1.3-1.3V35.5L32 53.4 2.5 52.8z" />
                    </svg>


                    <p className='font-semibold text-yellow-300 text-sm md:text-base'>GET SPECIAL DISCOUNTS TEXT</p>
                </div>
                <div className='md:flex md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2 mx-auto'>
                    <div className="flex items-center border-b border-teal-500 md:w-auto md:mr-3">
                        <input className="appearance-none bg-transparent border-none w-full text-white md:w-48 mr-3 px-3 py-2 leading-tight focus:outline-none text-xs md:text-sm placeholder-gray-400" type="text" placeholder="Enter your email" aria-label="Email"></input>
                    </div>
                    <button className='bg-cyan-400 p-2 rounded text-xs md:text-sm md:font-semibold w-full md:w-auto'>Subscribe</button>
                </div>
            </div>

            {/* Right Column */}
            <div className='flex flex-col justify-center items-center space-y-2'>
                <div className='flex items-center space-x-4'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="yellow"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className='text-yellow-300'
                    >
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                        <line x1="12" y1="18" x2="12" y2="22" />
                        <line x1="8" y1="2" x2="16" y2="2" />
                    </svg>
                    <p className='font-semibold text-white text-sm md:text-base'>CONTACT US</p>
                </div>
                <p className='text-gray-300 text-xs md:text-sm'>+880 1811 861 331</p>
                <p className='text-gray-300 text-xs md:text-sm'>Open 24 hours</p>
            </div>
        </div>
    );
}

export default ContactBanner;
