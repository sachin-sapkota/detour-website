import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

const options = {
  spaceBetween: 30,
  slidesPerView: 3,
  autoplay: {
    delay: 1000,
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

const TourSlider = () => {
  return (
    <>
        <div className="page-wrapper">
      <div className='tour-slider-v2 pb-50'>
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

      </div>
      <div className="tour-progress-v2"></div>
      </div>
    </>
  );
};

export default TourSlider;
