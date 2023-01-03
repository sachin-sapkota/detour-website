import React from 'react';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 20,
  nav: true,
  mouseDrag: true,
  items: 1,
  dots: false,
  autoplay: false,
  smartSpeed: 500,

  navText: [
    "<i class='ri-arrow-left-line'></i>",
    "<i class='ri-arrow-right-line'></i>",
  ],
};

const About = ({ bgColor,shape, featureStyle, ptb100 }) => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <section className={`about-wrap pb-100 ${ptb100} ${bgColor}`}>
        {shape && (
          <>
            <div className='shape-10 sm-none'>
              <img src='/images/shape-10.png' alt='Image' />
            </div>
            <div className='shape-11 sm-none'>
              <img src='/images/shape-10.png' alt='Image' />
            </div>
          </>
        )}

        <div className='container'>
          <div className='row gx-5'>
            <div className='col-lg-6'>
              <div className='section-title style6 sm-center mb-40'>
                <span>ABOUT US</span>
                <h2>We Provide Best Deals</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.
                </p>
              </div>
              <div className='about-features'>
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className='about-feature-icon'>
                    <i className='flaticon-customer-care'></i>
                  </div>
                  <div className='about-feature-text'>
                    <h4>Quality Services Ensure</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className='about-feature-icon'>
                    <i className='flaticon-support'></i>
                  </div>
                  <div className='about-feature-text'>
                    <h4>Customer Care</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>
                <div className={`about-feature-item ${featureStyle}`}>
                  <div className='about-feature-icon'>
                    <i className='flaticon-tour-guide'></i>
                  </div>
                  <div className='about-feature-text'>
                    <h4>Experience Guides</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='testimonial-wrap'>
                <div className='testimonial-slider-two swiper-container'>
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
                          <div className='testimonial-item new-design'>
                            <div className='testimonial-bg bg-f testimonial-bg-4'></div>
                            <div className='client-info'>
                              {/* <div className='client-img'>
                                <img
                                  src='/images/testimonial/client-1.jpg'
                                  alt='Image'
                                />
                              </div> */}
                              <div className='client-name'>
                                <h5>Tony Stark</h5>
                                <span>USA</span>
                              </div>
                              <div className='client-quote'>
                                <p>
                                  "Lorem, ipsum, dolor sit amet consectetur
                                  adipisicing elit. Quidem adipisci amet
                                  perferendis, ipsum beatae, vero iste
                                  veritatis, neque, maxime suscipit molestias.
                                  Perferendis obcaecati saepe "
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='testimonial-item new-design'>
                            <div className='testimonial-bg bg-f testimonial-bg-5'></div>
                            <div className='client-info'>
                              {/* <div className='client-img'>
                                <img
                                  src='/images/testimonial/client-2.jpg'
                                  alt='Image'
                                />
                              </div> */}
                              <div className='client-name'>
                                <h5>Carlos Misith</h5>
                                <span>Canada </span>
                              </div>
                              <div className='client-quote'>
                                <p>
                                  "Lorem, ipsum, dolor sit amet consectetur
                                  adipisicing elit. Quidem adipisci amet
                                  perferendis, ipsum beatae, vero iste
                                  veritatis, neque, maxime suscipit molestias.
                                  Perferendis obcaecati saepe "
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='testimonial-item new-design'>
                            <div className='testimonial-bg bg-f testimonial-bg-6'></div>
                            <div className='client-info'>
                              {/* <div className='client-img'>
                                <img
                                  src='/images/testimonial/client-3.jpg'
                                  alt='Image'
                                />
                              </div> */}
                              <div className='client-name'>
                                <h5>Jhon Doe</h5>
                                <span>USA</span>
                              </div>
                              <div className='client-quote'>
                                <p>
                                  "Lorem, ipsum, dolor sit amet consectetur
                                  adipisicing elit. Quidem adipisci amet
                                  perferendis, ipsum beatae, vero iste
                                  veritatis, neque, maxime suscipit molestias.
                                  Perferendis obcaecati saepe "
                                </p>
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
      </section>
    </>
  );
};

export default About;
