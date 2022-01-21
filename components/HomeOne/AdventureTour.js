import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

const options = {
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  speed: 1500,
  loop: true,
  autoHeight: true,
  navigation: true,
  className: 'mySwiper',

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
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

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
                <div className='section-title style1 mb-40'>
                  <span>Plan Your Next</span>
                  <h2>Adventure In Summer</h2>
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
                  <div className='tour-details-item bg-f tour-bg-4 style1'>
                    <div className='single-tour-info style2'>
                      <div className='tour-shape-two sm-none'>
                        <img src='/images/tour/shape-5.png' alt='Image' />
                      </div>
                      <span className='tour-discount'>Up To 30% Off</span>
                      <div className='feature-tour-meta'>
                        <div className='feature-tour-time'>
                          <i className='ri-time-line'></i>2 days
                        </div>
                        <div className='feature-tour-review'>
                          <span className='rating'>4.8</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(99)</span>
                        </div>
                      </div>
                      <div className='tour-details'>
                        <Link href='/tour-details'>
                          <a>
                            <h4>Sydney Tour</h4>
                          </a>
                        </Link>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum.
                        </p>
                      </div>
                      <div className='tour-btn'>
                        <Link href='/tour-details'>
                          <a className='btn v3'>
                            Book Now <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                        <Link href='/tour-details'>
                          <a className='btn v4 border'>
                            Tour Details
                            <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='tour-details-item bg-f tour-bg-5 style1'>
                    <div className='single-tour-info style2'>
                      <div className='tour-shape-two sm-none'>
                        <img src='/images/tour/shape-5.png' alt='Image' />
                      </div>
                      <span className='tour-discount'>Up To 50% Off</span>
                      <div className='feature-tour-meta'>
                        <div className='feature-tour-time'>
                          <i className='ri-time-line'></i>5 days
                        </div>
                        <div className='feature-tour-review'>
                          <span className='rating'>4.8</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(200)</span>
                        </div>
                      </div>
                      <div className='tour-details'>
                        <Link href='/tour-details'>
                          <a>
                            <h4>Makao Tour</h4>
                          </a>
                        </Link>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum.
                        </p>
                      </div>
                      <div className='tour-btn'>
                        <Link href='/tour-details'>
                          <a className='btn v3'>
                            Book Now <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                        <Link href='/tour-details'>
                          <a className='btn v4 border'>
                            Tour Details
                            <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='tour-details-item bg-f tour-bg-6 style1'>
                    <div className='single-tour-info style2'>
                      <div className='tour-shape-two sm-none'>
                        <img src='/images/tour/shape-5.png' alt='Image' />
                      </div>
                      <span className='tour-discount'>Up To 40% Off</span>
                      <div className='feature-tour-meta'>
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
                        <Link href='/tour-details'>
                          <a>
                            <h4>Thailand Experience</h4>
                          </a>
                        </Link>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum.
                        </p>
                      </div>
                      <div className='tour-btn'>
                        <Link href='/tour-details'>
                          <a className='btn v3'>
                            Book Now <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                        <Link href='/tour-details'>
                          <a className='btn v4 border'>
                            Tour Details
                            <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='tour-details-item bg-f tour-bg-7 style1'>
                    <div className='single-tour-info style2'>
                      <div className='tour-shape-two sm-none'>
                        <img src='/images/tour/shape-5.png' alt='Image' />
                      </div>
                      <span className='tour-discount'>Up To 40% Off</span>
                      <div className='feature-tour-meta'>
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
                        <Link href='/tour-details'>
                          <a>
                            <h4>Slora Experience</h4>
                          </a>
                        </Link>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum.
                        </p>
                      </div>
                      <div className='tour-btn'>
                        <Link href='/tour-details'>
                          <a className='btn v3'>
                            Book Now <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                        <Link href='/tour-details'>
                          <a className='btn v4 border'>
                            Tour Details
                            <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            ) : (
              ''
            )}
          </div>

          <div className='tour-progress-v1'></div>
          <div className='tour-details-next'></div>
          <div className='tour-details-prev'></div>
        </div>
      </div>
    </>
  );
};

export default AdventureTour;
