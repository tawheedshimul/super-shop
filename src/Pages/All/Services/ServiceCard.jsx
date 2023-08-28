import React, { useState } from 'react';

function ServiceCard({ service }) {
    const { title, images, price, rating, stock } = service;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    

    return (
        <div className="flex flex-col md:flex-row p-6 border rounded-lg shadow-md bg-gray-100">
            <div className="mx-auto container">
                <img
                    src={images[currentImageIndex]}
                    alt={title}
                    className="w-full rounded-lg h-64"
                />
                <div className="md:w-1/3 flex flex-col items-center space-y-3 mt-3 mx-auto">
                    <div className="flex justify-center">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={title}
                                className={`w-10 h-10 rounded-full cursor-pointer transition duration-300 transform ${index === currentImageIndex ? 'scale-105' : ''
                                    }`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center space-x-2">
                        <button
                            className="w-8 h-8 text-white bg-indigo-500 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                            onClick={prevImage}
                        >
                            &lt;
                        </button>
                        <button
                            className="w-8 h-8 text-white bg-indigo-500 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                            onClick={nextImage}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-lg font-semibold">${price}</p>
                <p className="mt-2">Rating: {rating}</p>
                <p className="mt-2">Stock: {stock} units</p>
                <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ServiceCard;
