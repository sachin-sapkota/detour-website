import React from 'react';

const NewsletterThree = () => {
  return (
    <>
      <div className='container bg-f px-0 newsletter newsletter-bg-1'>
        <div className='newsletter-wrap style3'>
          <div className='row align-items-center'>
            <div
              className='
                col-xl-5
                offset-xl-7
                col-lg-7
                offset-lg-5
                col-md-7
                offset-md-5
              '
            >
              <div className='newsletter-form'>
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

export default NewsletterThree;
