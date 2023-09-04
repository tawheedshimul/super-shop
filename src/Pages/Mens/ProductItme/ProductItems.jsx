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
        <div className="flex justify-between w-full  mt-20">
            <div className="w-4/12 bg-gray-200 m-2 rounded hidden md:block">
                <div className='mx-2'>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                </div>
            </div>
            <div className="product-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center container mx-auto">
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
                        </div>
                    </Link>
                ))}

            </div>
        </div>




    );
};

export default ProductList;



