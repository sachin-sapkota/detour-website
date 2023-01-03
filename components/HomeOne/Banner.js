import React from "react";

const Banner = () => {
  return (
    <>
      <div className="hero-wrap style1">
        <div className="container">
          <div className="row">
            <div className="col col-1-2">
              <div className="hero__media">
                <div className="hero__media-wrapper image-left-text-right">
                  <img src="/images/hero/hero-image.png" alt="hero-image" />
                </div>
              </div>
            </div>
            <div className="col col-1-2">
              <div className="hero__content">
                <h1 className="hero__heading">
                  Our mission is to ensure that you have access to the Best
                  Healthcare around the world.
                </h1>
                <h4 className="hero__subheading font-25">
                  Everywhere, Anytime for Everyone
                </h4>
                <div class="hero__btn-block">
                  <a href="/get-quote" className="btn v3">
                    <span>Get a quote </span>{" "}
                    <i class="ri-logout-circle-r-line"></i>
                  </a>
                  <a href="" target="_blank" rel="noopener" class="btn--2 ">
                    <span>Video: Who we are </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='hero-filter-box bg-heath'>
        <div className='filter-shape-one'>
          <img src='/images/filter-shape-1.png' alt='Image' />
        </div>
        <div className='filter-shape-two'>
          <img src='/images/filter-shape-2.png' alt='Image' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='filter-tours-wrap style3'>
              <div className='filter-box'>
                  <div className='form-group'>
                    <p>Treatments ?</p>
                    <input
                      name='kw'
                      id='kw'
                      type='search'
                      placeholder='Treatment, Specialities..'
                    />
                  </div>
                </div>
                <div className='filter-box'>
                  <div className='form-group'>
                    <p>Where ?</p>
                    <input
                      name='kw'
                      id='kw'
                      type='search'
                      placeholder='Country, town..'
                    />
                  </div>
                </div>
                <div className='filter-box'>
                  <div className='form-group'>
                    <p>Your address mail</p>
                    <input
                      name='kw'
                      id='kw'
                      type='search'
                      placeholder='Your email address'
                    />
                  </div>
                </div>
                <div className='filter-box'>
                  <button type='submit' className='search-btn'>
                    GO <i className='ri-logout-circle-r-line'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
