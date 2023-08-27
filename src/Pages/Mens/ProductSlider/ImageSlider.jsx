import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, autoPlayInterval = 3000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, autoPlayInterval);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div className="flex items-center justify-center h-full">
            <div className="relative w-full max-w-screen-md">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
                    onClick={prevSlide}
                >
                    &lt;
                </button>
                <div className="relative overflow-hidden">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
                    onClick={nextSlide}
                >
                    &gt;
                </button>
                <div className="flex justify-center mt-4">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 mx-2 rounded-full ${index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
