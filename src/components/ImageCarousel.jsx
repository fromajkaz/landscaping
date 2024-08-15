import React, { useState } from 'react';
import image1 from '../assets/image/image1.jpg'
import image2 from '../assets/image/image2.jpg'
import image3 from '../assets/image/image3.jpg'
import image4 from '../assets/image/image4.jpg'
import ArrowLeft from '../assets/image/arrow-left.svg'
import ArrowRight from '../assets/image/arrow-right.svg'


const images = [image1, image2, image3, image4];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      {/* Слайд */}
      <div className="flex justify-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
            className="w-[80%]  sm:h-3/4 md:h-2/3 lg:h-1/2"
        />
      </div>

      {/* Кнопка "Назад" */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-2 md:-left-0 lg:-left-0 xl:left-20 p-3  z-10"
      ><img src={ArrowLeft} alt="" width={30} height={30} />
      </button>

      {/* Кнопка "Вперед" */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-2   md:-right-0 lg:-right-0 xl:right-20 p-3  z-10"
      ><img src={ArrowRight} width={30} height={30} alt="" />
        
      </button>
    </div>
  );
};

export default Slider;


