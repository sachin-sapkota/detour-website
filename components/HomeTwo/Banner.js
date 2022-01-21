import React from 'react';

const Banner = () => {
  return (
    <>
      <div className='hero-wrap style2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-7 col-lg-8'>
              <div className='hero-content style2 text-left'>
                <h1>
                  Make Tour & Explore <br />
                  <span>Incredible Destinations</span>
                </h1>
                <div className='filter-tours-wrap style2'>
                  <div className='filter-box'>
                    <div className='form-group'>
                      <input type='search' placeholder='Keywords' />
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
                    <div className='filter-dropdown'>
                      <select className='hero-filter'>
                        <option value='1'>Duration</option>
                        <option value='2'>3 Days</option>
                        <option value='3'>5 Days</option>
                        <option value='4'>10 Days</option>
                      </select>
                      <span className='hero-filter-down-arrow'>
                        <i className='ri-arrow-down-s-line'></i>
                      </span>
                    </div>
                  </div>
                  <div className='filter-box'>
                    <div className='filter-dropdown'>
                      <select className='hero-filter'>
                        <option value='1'>Person</option>
                        <option value='2'>1-3</option>
                      </select>
                      <span className='hero-filter-down-arrow'>
                        <i className='ri-arrow-down-s-line'></i>
                      </span>
                    </div>
                  </div>
                  <div className='filter-box'>
                    <button type='submit' className='search-btn'>
                      Search <i className='ri-search-line'></i>
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
