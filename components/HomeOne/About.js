import {useState,useEffect} from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 20,
  nav: true,
  mouseDrag: true,
  dots: false,
  autoplay: false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:2
    }
},

  navText: [
    "<i class='ri-arrow-left-line'></i>",
    "<i class='ri-arrow-right-line'></i>",
  ],
};

const About = () => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <section className='about-wrap pt-100 pb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5'>
              <div className='section-title style1 about-title'>
                <span>About Us</span>
                <h2 className="mb-1">We Provide Best Deals</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.
                </p>
                <div className='shape-9 sm-none'>
                  <img src='/images/leaf-1.png' alt='Image' />
                </div>
              </div>
              <div className='about-features'>
                <div className='about-feature-item'>
                  <i className='flaticon-customer-care'></i>
                  <h4>Quality ServicesEnsure</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna.
                  </p>
                </div>
                <div className='about-feature-item'>
                  <i className='flaticon-support'></i>
                  <h4>Customer Care</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna.
                  </p>
                </div>
                <div className='about-feature-item'>
                  <i className='flaticon-tour-guide'></i>
                  <h4>Experience Guides</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 offset-lg-1'>
              <div className='testimonial-wrap'>
                <div className='testimonial-slider-one swiper-container'>
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
                            <div className='testimonial-bg bg-f testimonial-bg-1'></div>
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
                                  "Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='testimonial-item new-design'>
                            <div className='testimonial-bg bg-f testimonial-bg-2'></div>
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
                                  "Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='testimonial-item new-design'>
                            <div className='testimonial-bg bg-f testimonial-bg-3'></div>
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
                                  "Lorem ipsum dolor sit amet, consetetur
                                  sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore."
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
