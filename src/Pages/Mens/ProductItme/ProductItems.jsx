import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./ProductItems.css"

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
        <div className="fixed top-0 m flex  justify-between w-full mt-20">
            <div className="w-4/12 bg-gray-200 mx-2 rounded hidden md:block">
                <div className='scroll mx-2'>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                    <div>dsfsd</div>
                </div>
            </div>
            <div className="scroll bg-gray-300 rounded-e product-list grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center container mx-auto">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="m-2">
                        <div className="max-w-xs bg-white rounded shadow-md  w-38">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-48 object-cover rounded-t"
                            />
                            <div className="p-2">
                                <div className='flex justify-between'>
                                <div className="text-gray-700">Price: ${product.price}</div>
                                <div className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"> stock</div>
                                </div>
                                <div className="text-lg h-12 font-semibold">{product.title}</div>

                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>




    );
};

export default ProductList;



