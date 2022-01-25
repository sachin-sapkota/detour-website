import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Blog from './Blog';

const options = {
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  speed: 1500,
  loop: true,
  autoHeight: true,
  navigation: true,
  centeredSlides: true,
  className: 'mySwiper',
  pagination: {
    el: '.tour-slider-v3-pagination',
      "clickable": true,
      "renderBullet": function (index, className) {
        return '<span class=\"' + className + '\"><i class="ri-checkbox-blank-circle-fill"></i></span>';
      }
  },
  breakpoints: {
    0: {
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 20,
    },
    992: {
      spaceBetween: 20,
    },
    1200: {
      spaceBetween: 30,
    },
  },
};

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const AdventureTour = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <div className='page-wrapper'>
        <div className='adventure-tour-wrap'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='section-title style1 mb-40 text-center'>
                  <h2>Medical information</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='tour-slider-v1'>
            {display ? (
              <Swiper {...options}>
                <SwiperSlide>
                  <Blog />
                </SwiperSlide>

                <SwiperSlide>
                  <Blog />
                </SwiperSlide>

                <SwiperSlide>
                  <Blog />
                </SwiperSlide>
              </Swiper>
            ) : (
              ''
            )}
            <div className="tour-slider-v3-pagination pb-30"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdventureTour;
