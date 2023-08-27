import React from 'react';
import ImageSlider from './ImageSlider'; // Update the path to match your file structure

const images = [
  {
    src: 'https://i.pinimg.com/originals/fa/b9/ec/fab9ecd3d3b39a7ee39ef3e87e083713.png',
    alt: 'Image 1',
  },
  {
    src: 'https://i.pinimg.com/originals/fa/b9/ec/fab9ecd3d3b39a7ee39ef3e87e083713.png',
    alt: 'Image 1',
  },
  {
    src: 'https://i.pinimg.com/originals/fa/b9/ec/fab9ecd3d3b39a7ee39ef3e87e083713.png',
    alt: 'Image 1',
  },
  {
    src: 'https://i.pinimg.com/originals/fa/b9/ec/fab9ecd3d3b39a7ee39ef3e87e083713.png',
    alt: 'Image 1',
  },
  {
    src: 'https://i.pinimg.com/originals/fa/b9/ec/fab9ecd3d3b39a7ee39ef3e87e083713.png',
    alt: 'Image 1',
  },
  {
    src: 'https://i.pinimg.com/originals/fa/b9/ec/fab9ecd3d3b39a7ee39ef3e87e083713.png',
    alt: 'Image 1',
  },
  {
    src: 'your-image-url-2.jpg',
    alt: 'Image 2',
  },
  {
    src: 'your-image-url-3.jpg',
    alt: 'Image 3',
  },
  // Add more images as needed
];

const ProductSlider = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ImageSlider images={images} autoPlayInterval={5000} />
    </div>
  );
};

export default ProductSlider;
