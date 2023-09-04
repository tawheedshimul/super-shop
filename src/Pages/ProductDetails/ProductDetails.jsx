import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL parameter
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch the specific product data based on the ID
    fetch('/services.json') // Use the correct path to your JSON file
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find((item) => item.id === parseInt(id, 10));
        setProduct(selectedProduct);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Destructure product properties
  const { title, description, price, discountPercentage, rating, stock, brand, category, images } = product;

  return (
    <div className="bg-white flex flex-col md:flex-row rounded-lg shadow-lg container mx-auto mt-4 md:mt-24">
      <div className='w-full md:w-1/2 p-2'>
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="w-full h-auto "
        />
        <div className="flex mt-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={title}
              className={`w-10 m-1 h-10 rounded-full cursor-pointer transition duration-300 transform ${index === currentImageIndex ? 'scale-105' : ''
                }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 p-2">
        <h2 className="text-2xl text-white bg-cyan-400 p-2 font-semibold">{title}</h2>
        <p className="text-green-600 font-semibold text-xl my-2">Price: ${price}</p>
        <p className="text-orange-500 font-semibold text-xl my-2">Discount: {discountPercentage}%</p>
        <p className="text-yellow-400 font-semibold text-xl my-2">Rating: {rating}</p>
        <p className="text-blue-500 font-semibold text-xl my-2">In Stock: {stock}</p>
        <p className="text-purple-600 font-semibold text-xl my-2">Brand: {brand}</p>
        <p className="text-indigo-500 font-semibold text-xl my-2">Category: {category}</p>
        <input className='bg-gray-400 px-4 py-2 font-bold cursor-pointer my-2' type="button" value="Add Cart" />
        <hr className='my-2' />
        <div className="border-t border-b py-2 border-gray-200">
          <p className="text-base leading-4 text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
