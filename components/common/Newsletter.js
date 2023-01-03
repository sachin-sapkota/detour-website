import React from 'react';

const Newsletter = ({inputStyle}) => {
  return (
    <>
      <div className='container px-0 bg-heath newsletter'>
        <div className={`newsletter-wrap ${inputStyle}`}>
          <div className='dot-shape sm-none'>
            <img src='/images/dot-shape.svg' alt='Image' />
          </div>
          <div className='curve-shape sm-none'>
            <img src='/images/curve.png' alt='Image' />
          </div>
          <div className='row align-items-center'>
            <div className='col-xl-6 col-lg-5 col-md-5'>
              <div className='newsletter-img'>
                <img src='/images/newsletter-img-1.png' alt='Image' />
              </div>
            </div>
            <div className='col-xl-5 offset-xl-1 col-lg-7 offset-lg-0 col-md-7'>
              <div className='newsletter-form style1'>
                <h3>
                  <span>Get Subscribe </span>
                  <br />
                  Our Newsletter
                </h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                <form action='#'>
                  <div className='form-group mb-20'>
                    <input
                      type='email'
                      placeholder='Enter Your Email Address'
                    />
                  </div>
                  <div className='form-group mb-0'>
                    <button type='submit' className='btn v5'>
                      Subscribe Now <i className='ri-logout-circle-r-line'></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
