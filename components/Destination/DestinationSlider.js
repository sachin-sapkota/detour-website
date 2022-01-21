import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

const options = {
  spaceBetween: 30,
  slidesPerView: 3,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  speed: 1500,
  loop: true,
  autoHeight: true,
  pagination: {
    type: 'progressbar',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const TourSlider = ({pt70}) => {
  return (
    <>
      <div className={`tour-slider-v2 ${pt70}`}>
        <Swiper {...options}>
          <SwiperSlide>
            <div className='tour-details-item bg-f tour-bg-1'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='tour-details-item bg-f tour-bg-2'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='tour-details-item bg-f tour-bg-5'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='tour-details-item bg-f tour-bg-6'></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='tour-details-item bg-f tour-bg-3'></div>
          </SwiperSlide>
        </Swiper>

        <div className='tour-progress-v2'></div>

        <div className='tour-details-next'></div>
        <div className='tour-details-prev'></div>
      </div>
    </>
  );
};

export default TourSlider;
