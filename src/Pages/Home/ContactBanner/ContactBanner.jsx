import React from 'react'

function ContactBanner() {
    return (
        <div className='grid md:grid-cols-2 bg-gray-600 p-2'>
            <div className='mx-auto'>
                <div className='flex'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M20 3H4C2.89 3 2.01 3.89 2.01 5L2 19c0 1.11 .89 2 2 2H20c1.1 0 2 -0.89 2 -2V5c0 -1.11 -0.9 -2 -2 -2zM20 7L12 12L4 7h16zM4 17V8.06l8 5.01l8 -5.01v8.94L12 17L4 17z"
                        />
                    </svg>

                    <p className='font-semibold text-yellow-300'>GET SPECIAL DISCOUNTS IN YOUR INBOX</p>
                </div>
                <div className='flex flex-col md:flex-row md:items-center mt-2'>
                    <div class="flex items-center border-b grow border-teal-500 md:w-auto md:mr-3">
                        <input class="appearance-none bg-transparent border-none w-full text-white mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Put Yout Mail" aria-label="Full name"></input>
                    </div>
                    <button className='md:mt-0 bg-cyan-400 p-2 rounded'>Subscribe</button>
                </div>
            </div>
            <div className='mx-auto'>
                <div className='flex'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="yellow"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                        <line x1="12" y1="18" x2="12" y2="22" />
                        <line x1="8" y1="2" x2="16" y2="2" />
                    </svg>

                    <p className='font-semibold text-white'>CONTACT US</p>
                </div>
                <p className='text-gray-300'>+8801811861331</p>
                <p className='text-gray-300'>Open 24 hours any time</p>
            </div>
        </div>
    )
}

export default ContactBanner