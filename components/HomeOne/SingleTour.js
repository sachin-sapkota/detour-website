import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  autoplayHoverPause: false,
  items: 1,
  dots: false,
  autoplay: false,
  navText: ['prev', 'next'],
};

const SingleTour = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <div className='single-tour z-0'>
        <div className='container-fluid px-0'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='single-tour-slider swiper-container'>
                <div className='swiper-wrapper'>
                  {display ? (
                    <OwlCarousel
                      className='owl-theme'
                      loop
                      margin={10}
                      nav
                      {...options}
                    >
                      <div className='swiper-slide'>
                        <div className='single-tour-item bg-f tour-bg-1'>
                          <div className='single-tour-info style1'>
                            <div className="box">
                              <div className='tour-shape-two sm-none'>
                                <img src='/images/tour/shape-2.png' alt='Image' />
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
                                    <h4>Bali Experience</h4>
                                  </a>
                                </Link>
                                <p>
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod tempor
                                  invidunt ut labore et dolore magna aliquyam
                                  erat, sed diam voluptua. At vero eos et accusam
                                  et justo duo dolores et ea rebum.
                                </p>
                              </div>
                              <div className='tour-btn'>
                                <Link href='/tour-details'>
                                  <a className='btn v3'>
                                    Book Now{' '}
                                    <i className='ri-logout-circle-r-line'></i>
                                  </a>
                                </Link>
                                <Link href='/tour-details'>
                                  <a className='btn v4'>
                                    Tour Details
                                    <i className='ri-logout-circle-r-line'></i>
                                  </a>
                                </Link>
                              </div>

                              <div className='swiper-pagination tours-pagination'>
                                1 / 3
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='swiper-slide'>
                        <div className='single-tour-item bg-f tour-bg-2'>
                          <div className='single-tour-info style1'>
                            <div className="box">
                              <div className='tour-shape-two sm-none'>
                                <img src='/images/tour/shape-2.png' alt='Image' />
                              </div>
                              <span className='tour-discount'>Up To 30% Off</span>
                              <div className='feature-tour-meta'>
                                <div className='feature-tour-time'>
                                  <i className='ri-time-line'></i>3 days
                                </div>
                                <div className='feature-tour-review'>
                                  <span className='rating'>4.85</span>
                                  <i className='ri-star-fill'></i>
                                  <span className='total-review'>(100)</span>
                                </div>
                              </div>
                              <div className='tour-details'>
                                <Link href='/tour-details'>
                                  <a>
                                    <h4>Hackon Vally, USA</h4>
                                  </a>
                                </Link>
                                <p>
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod tempor
                                  invidunt ut labore et dolore magna aliquyam
                                  erat, sed diam voluptua. At vero eos et accusam
                                  et justo duo dolores et ea rebum.
                                </p>
                              </div>
                              <div className='tour-btn'>
                                <Link href='/tour-details'>
                                  <a className='btn v3'>
                                    Book Now{' '}
                                    <i className='ri-logout-circle-r-line'></i>
                                  </a>
                                </Link>
                                <Link href='/tour-details'>
                                  <a className='btn v4'>
                                    Tour Details
                                    <i className='ri-logout-circle-r-line'></i>
                                  </a>
                                </Link>
                              </div>

                              <div className='swiper-pagination tours-pagination'>
                                2 / 3
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='swiper-slide'>
                        <div className='single-tour-item bg-f tour-bg-3'>
                          <div className='single-tour-info style1'>
                            <div className="box">
                              <div className='tour-shape-two sm-none'>
                                <img src='/images/tour/shape-2.png' alt='Image' />
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
                                    <h4>Vietnam Experience</h4>
                                  </a>
                                </Link>
                                <p>
                                  Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod tempor
                                  invidunt ut labore et dolore magna aliquyam
                                  erat, sed diam voluptua. At vero eos et accusam
                                  et justo duo dolores et ea rebum.
                                </p>
                              </div>
                              <div className='tour-btn'>
                                <Link href='/tour-details'>
                                  <a className='btn v3'>
                                    Book Now{' '}
                                    <i className='ri-logout-circle-r-line'></i>
                                  </a>
                                </Link>
                                <Link href='/tour-details'>
                                  <a className='btn v4'>
                                    Tour Details
                                    <i className='ri-logout-circle-r-line'></i>
                                  </a>
                                </Link>
                              </div>

                              <div className='swiper-pagination tours-pagination'>
                                3 / 3
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTour;
