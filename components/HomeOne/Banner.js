import React from "react";

const Banner = () => {
  return (
    <>
      <div className="body_overlay"></div>
      <div className="hero-wrap style1">
        <div className="hero-shape-one sm-none">
          <img src="/images/hero/hero-shape-1.png" alt="Image" />
        </div>
        <div className="hero-shape-two sm-none">
          <img src="/images/hero/hero-shape-2.png" alt="Image" />
        </div>

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
                  {/* //PROBLEM  */}
                  <a href="/get-quote" className="btn v3">
                    <span>Get a quote </span>{" "}
                    <i class="ri-logout-circle-r-line"></i>
                  </a>
                  <a href="" target="_blank" rel="noopener" class="btn--2 ">
                    <span>Video: Who we are </span>
                  </a>
                </div>
				<div className='filter-tours-wrap style1 mt-5'>
                  <div className='filter-box'>
                    <div className='form-group'>
                      <input type='search' placeholder='Keywords' />
                      <button type='submit'>
                        <i className='ri-search-line'></i>
                      </button>
                    </div>
                  </div>
                  <div className='filter-box'>
                    <div className='filter-dropdown'>
                      <select className='hero-filter'>
                        <option value='1'>Destination</option>
                        <option value='2'>Europe</option>
                        <option value='3'>Asia</option>
                        <option value='4'>Africa</option>
                      </select>
                      <span className='hero-filter-down-arrow'>
                        <i className='ri-arrow-down-s-line'></i>
                      </span>
                    </div>
                  </div>
                  <div className='filter-box'>
                    <button type='submit' className='search-btn'>
                      Search <i className='ri-logout-circle-r-line'></i>
                    </button>
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
