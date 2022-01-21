import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

const options = {
  spaceBetween: 50,
  slidesPerView: 1.5,
  autoplay: {
      delay: 12000,
      disableOnInteraction: false
  },
  speed: 1500,
  loop: true,
  autoHeight: true,
  centeredSlides: true,

  pagination: {
    el: '.tour-slider-v3-pagination',
      "clickable": true,
      "renderBullet": function (index, className) {

        return '<span class=\"' + className + '\">' + (index + 1) + '</span>';

      }

      
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 20,

      },
      768: {
          slidesPerView: 1.2,
          spaceBetween: 20,

      },
      992: {
          slidesPerView: 1.2,
          spaceBetween: 20,

      },
      1200: {
          slidesPerView: 1.5,
          spaceBetween: 40,

      }
  }

};

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const TourSlider = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
  }, []);

  return (
    <>
      <div className='tour-slider-wrap pb-100'>
        <div className='tour-slider-v3'>
          <div>
            {display ? (
              <Swiper {...options}>
                <SwiperSlide>
                  <div className='tour-slide_item bg-f tour-bg-1'>
                    <span className='tour-discount style4'>Up To 40% Off</span>
                    <div className='tour-slide-info'>
                      <div className='single-tour-info style3'>
                        <div className='feature-tour-meta justify-content-center'>
                          <div className='feature-tour-time'>
                            <i className='ri-time-line'></i>
                            10 days
                          </div>
                          <div className='feature-tour-review'>
                            <span className='rating'>4.8</span>
                            <i className='ri-star-fill'></i>
                            <span className='total-review'>(200)</span>
                          </div>
                        </div>
                        <div className='tour-details'>
                          <h4>Bali Experience</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonum.
                          </p>
                          <Link href='/tour-details'>

                          <a className='link'>
                            Tour Details <i className='ri-logout-circle-r-line'></i>
                          </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='tour-slide_item bg-f tour-bg-2'>
                    <span className='tour-discount style4'>Up To 20% Off</span>
                    <div className='tour-slide-info'>
                      <div className='single-tour-info style3'>
                        <div className='feature-tour-meta justify-content-center'>
                          <div className='feature-tour-time'>
                            <i className='ri-time-line'></i>4 days
                          </div>
                          <div className='feature-tour-review'>
                            <span className='rating'>4.8</span>
                            <i className='ri-star-fill'></i>
                            <span className='total-review'>(230)</span>
                          </div>
                        </div>
                        <div className='tour-details'>
                          <h4>Navoli Vally</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonum.
                          </p>
                          <Link href='/tour-details'>
                          <a className='link'>
                            Tour Details <i className='ri-logout-circle-r-line'></i>
                          </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='tour-slide_item bg-f tour-bg-3'>
                    <span className='tour-discount style4'>Up To 10% Off</span>
                    <div className='tour-slide-info'>
                      <div className='single-tour-info style3'>
                        <div className='feature-tour-meta justify-content-center'>
                          <div className='feature-tour-time'>
                            <i className='ri-time-line'></i>
                            10 days
                          </div>
                          <div className='feature-tour-review'>
                            <span className='rating'>4.8</span>
                            <i className='ri-star-fill'></i>
                            <span className='total-review'>(200)</span>
                          </div>
                        </div>
                        <div className='tour-details'>
                          <h4>Vietnam Experience</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonum.
                          </p>
                          <Link href='/tour-details'>

                          <a className='link'>
                            Tour Details <i className='ri-logout-circle-r-line'></i>
                          </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>



              </Swiper>
            ) : (
              ''
            )}
            <div className="tour-slider-v3-pagination"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourSlider;
