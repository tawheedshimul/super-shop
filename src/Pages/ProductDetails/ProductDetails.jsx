import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DressSizeChart from './DressSizeChart/DressSizeChart';

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
          className="w-full h-auto rounded "
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
        <h2 className="text-2xl text-white bg-cyan-400 rounded p-2 font-semibold">{title}</h2>
        <p className="border-b border-cyan-500 bg-cyan-100 p-2">Price: ৳ <span className='text-white font-bold bg-red-500 rounded px-10 p-1'>{price}</span></p>
        <div className='flex justify-between border-b border-cyan-500 bg-cyan-100 p-2'>
          <p>Size</p>
          <select name="" id="" className="flex items-center border border-slate-400 bg-slate-50 px-2 text-sm text-black transition-colors duration-300 outline-0 hover:border hover:border-cyan-400">
            <option value="xs">Premium XS</option>
            <option value="s">Premium S</option>
            <option value="m">Premium M</option>
            <option value="l">Premium L</option>
            <option value="xl">Premium XL</option>
            <option value="xxl">Premium XXL</option>
          </select>
        </div>

        <div className='flex'>
          <input className='bg-cyan-400 px-4 rounded-l py-2 font-bold cursor-pointer hover:bg-cyan-500 grow my-2' type="button" value="Buy Now" />
          <input className='bg-gray-400 px-4 py-2 rounded-r font-bold cursor-pointer hover:bg-gray-500 grow ms-2 my-2' type="button" value="Add Cart" />
        </div>
        <hr className='my-2' />
        <div className="border-t border-b py-2 border-gray-200">
          <p className="text-base leading-4 text-gray-800">{description}</p>
        </div>
        <DressSizeChart></DressSizeChart>
      </div>
    </div>
  );
};

export default ProductDetails;
