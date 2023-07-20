import React, { useState } from 'react';

function Banner() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleDismissBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <>
      {isBannerVisible && (
        <div className="h-10 relative bg-gradient-to-r from-[#ff80b5] to-[#9089fc] px-6 py-2.5 sm:px-3.5">
          <div className="flex items-center justify-between max-w-7xl mx-auto py-4 sm:py-5">
            <div className="text-white">
              <p className="text-sm leading-6">
                <strong className="font-semibold">GeneriCon 2023</strong> - Join us in Denver from
                June 7 – 9 to see what’s coming next.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="rounded-full bg-white text-sm font-semibold text-gray-900 px-4 py-2 hover:bg-gray-100 transition duration-300"
              >
                Register now
              </a>
              <button
                type="button"
                className="p-1 hover:bg-gray-100 rounded transition duration-300 focus:outline-none"
                onClick={handleDismissBanner}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white hover:text-gray-900 transition duration-150"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 10l4.147-4.146a1 1 0 111.414 1.414L11.414 11l4.147 4.146a1 1 0 11-1.414 1.414L10 12.414l-4.146 4.147a1 1 0 11-1.414-1.414L8.586 11 4.439 6.854a1 1 0 111.414-1.414L10 9.586z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
