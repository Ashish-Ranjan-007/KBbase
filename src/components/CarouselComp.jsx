import React from 'react'
import { Carousel } from "antd";
import Hero from './Hero';

const CarouselComp = () => {

    
  return (
    <>
      <Carousel className='px-10' autoplay autoplaySpeed-2000>
          <Hero />
          <Hero />
          <Hero />
      </Carousel> 

    </>
  );
}

export default CarouselComp