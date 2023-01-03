import React from 'react';
import Link from 'next/link';

const Expertise = () => {
  return (
    <>
    <section className='about-wrap pt-40 pb-40'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='testimonial-wrap'>
                <div className='testimonial-slider-one swiper-container'>
                  <div className='swiper-wrapper'>
                  <video src='/videos/sample.mp4' className='w-100' controls />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5 offset-lg-1'>
              <div className='section-title style1 about-title'>
                <span>About Us</span>
                <h2 className="mb-1">We Provide Best Deals</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
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
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
                <div className='about-feature-item'>
                  <i className='flaticon-support'></i>
                  <h4>Customer Care</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
                <div className='about-feature-item'>
                  <i className='flaticon-tour-guide'></i>
                  <h4>Experience Guides</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
                <div className='about-feature-item'>
                    <span>Interested ? </span>
                    <Link href='/tours'>
                      <a className='btn v2 ms-5 get-started'>
                        Get started
                      </a>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
