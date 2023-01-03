import React from 'react';

const SearchTour = () => {
  return (
    <>
      <div className='search-tour'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='filter-tours-wrap style1 mt-30'>
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
                      <option value='3'>1-5</option>
                      <option value='4'>5-10</option>
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

export default SearchTour;
