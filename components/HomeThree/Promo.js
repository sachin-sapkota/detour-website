import React from 'react';

const Promo = () => {
  return (
    <>
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
                    id='datepicker-from'
                    className='input-group date'
                    data-date-format='dd-mm-yyyy'
                  >
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Arrival'
                    />
                    <span className='input-group-addon'>
                      <i className='ri-calendar-line'></i>
                    </span>
                  </div>
                </div>
                <div className='filter-box'>
                  <p>Departure</p>
                  <div
                    id='datepicker-to'
                    className='input-group date'
                    data-date-format='dd-mm-yyyy'
                  >
                    <input
                      className='form-control'
                      type='text'
                      placeholder='Arrival'
                    />
                    <span className='input-group-addon'>
                      <i className='ri-calendar-line'></i>
                    </span>
                  </div>
                </div>
                <div className='filter-box'>
                  <p>Person</p>
                  <div className='filter-dropdown'>
                    <select>
                      <option value='1'>02</option>
                      <option value='2'>03</option>
                      <option value='3'>04</option>
                    </select>
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

export default Promo;
