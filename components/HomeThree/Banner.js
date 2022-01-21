import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <>
      <div className='hero-wrap style3 bg-f hero-bg-2'>
        <div className='overlay op-6 bg-minsk'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-8 offset-xl-2 col-lg-10 offset-lg-1'>
              <div className='hero-content text-center'>
                <span className='subtitle'>Welcome To Detour</span>
                <h1>
                  Make Tour & Explore <br />
                  Incredible Destinations
                </h1>
                <Link href='/tour-details'>
                  <a className='btn v7'>
                    Explore More<i className='ri-logout-circle-r-line'></i>
                  </a>
                </Link>
              </div>
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
                    <p>Destination</p>
                    <input
                      name='kw'
                      id='kw'
                      type='search'
                      placeholder='Keywords'
                    />
                  </div>
                </div>
                <div className='filter-box'>
                  <p>Arrival</p>
                  <div
                    className='input-group'
                  >
                    <input
                      className='form-control'
                      type='date'
                      placeholder='Arrival'
                    />
                  </div>
                </div>
                <div className='filter-box'>
                  <p>Departure</p>
                  <div
                    className='input-group'
                  >
                    <input
                      className='form-control'
                      type='date'
                      placeholder='Arrival'
                    />
                  </div>
                </div>
                <div className='filter-box'>
                  <p>Person</p>
                  <div className='filter-dropdown'>
                    <select className='hero-filter-three'>
                      <option value='1'>02</option>
                      <option value='2'>03</option>
                      <option value='3'>04</option>
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
    </>
  );
};

export default Banner;
