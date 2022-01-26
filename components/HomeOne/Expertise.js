import React from 'react';

const Expertise = () => {
  return (
    <>
      <section className='about-wrap pt-40 pb-40'>
        <div className='container'>
          <div className='row align-items-center'>
          <div class="row mb-40 align-items-end">
            <div class="col-md-12">
              <div class="section-title style1 text-center">
                <h2>The Simplest Process in Finding Healthcare Abroad</h2>
              </div>
            </div>
          </div>
            <div className='col-lg-6'>
              <div className='section-title style1 about-title'>
                <span>Scalable...</span>
              </div>
              <div className='about-features'>
                <div className='about-feature-item'>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-5 offset-lg-1'>
              <div className='testimonial-wrap'>
                <div className='testimonial-slider-one swiper-container'>
                  <div className='swiper-wrapper'>
                  <video src='/videos/sample.mp4' className='w-100' controls />
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

export default Expertise;
