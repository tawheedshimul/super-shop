import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';


const SlideCarousel = () => {
  return (
    <>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log('I am ready')}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
          <div key={item} className='bg-gray-300/20 border-2 border-gray-300/70 rounded h-36 w-48'>
            {item}
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

export default SlideCarousel;