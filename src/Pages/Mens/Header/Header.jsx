import React, { useState } from 'react';

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        {
            src: 'https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=900&t=st=1693140142~exp=1693140742~hmac=5f665f28bd50e211870558257f6bfeb6cca54d5f8957f1d5ecb4275190b43c3a',
            alt: 'Image 1',
        },
        {
            src: 'https://img.freepik.com/free-psd/fashion-store-banner-template_23-2148675200.jpg?w=900&t=st=1693140089~exp=1693140689~hmac=edecc400046ec76108fba1ae2a2c8d18a2926d7daa6e39e9a8311c239e8b4726',
            alt: 'Image 1',
        },
        {
            src: 'https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?w=900&t=st=1693140060~exp=1693140660~hmac=f802f54678ab223038dc55289b72589ce69e474a9ba5ba08641f2171b8f73cb7',
            alt: 'Image 2',
        },
        {
            src: 'https://img.freepik.com/free-vector/abstract-sales-landing-page-with-photo_52683-28047.jpg?w=740&t=st=1693140110~exp=1693140710~hmac=e620735602ad34ac6d9c5e144352692d9777989699f881ea0ba16df9524a09c8',
            alt: 'Image 3',
        },
        // Add more images as needed
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="relative w-full h-64 max-w-screen-md mt-28">
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
                onClick={prevSlide}
            >
                &lt;
            </button>
            <img src={images[currentSlide].src} alt={images[currentSlide].alt} />
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
                onClick={nextSlide}
            >
                &gt;
            </button>
        </div>
    );
};

export default ImageSlider;
