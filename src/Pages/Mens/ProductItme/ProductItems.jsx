import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch and set the data from the JSON file in the public folder
        fetch('/services.json') // Use the correct path to your JSON file
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="product-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 justify-center container mx-auto mt-24">
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="m-2">
                    <div className="max-w-xs bg-white rounded-lg shadow-md  w-38">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-40 object-cover rounded-t"
                        />
                        <div className="p-4">
                            <div className="text-lg h-14 font-semibold">{product.title}</div>
                            <div className="text-gray-700 mt-2">Price: ${product.price}</div>
                        </div>
                        {/* <div className="bg-gray-100 p-4 rounded-b">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6l2-2a2 2 0 00-3-3 2 2 0 00-3 3l2 2m14 5a5 5 0 01-5 5h-2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5H3a1 1 0 01-1-1V9a1 1 0 011-1h4.2l1.671-3.343A1 1 0 019.671 5h4.658a1 1 0 01.799.414L16.8 8H21a1 1 0 011 1v2zM6 18h12v-4H6v4z" />
                                </svg>
                            </div>
                        </div> */}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;



