import React from 'react';
import Link from 'next/link';

const BestTour = () => {
  return (
    <>
      <section className='best-tour-wrap pt-100 pb-70'>
        <div className='container'>
          <div className='row mb-40 align-items-end'>
            <div className='col-md-8'>
              <div className='section-title style1 sm-center'>
                <span>Upcoming</span>
                <h2>Best Tour Of The Year</h2>
              </div>
            </div>
            <div className='col-md-4 text-md-end sm-none'>
              <Link href='/tours'>
                <a className='btn v2'>
                  View ALL Trip <i className='ri-logout-circle-r-line'></i>
                </a>
              </Link>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
              <div className='best-tour-item style1'>
                <div className='best-tour-img'>
                  <Link href='/tour-details'>
                    <a>
                      <img src='/images/tour/tour-7.jpg' alt='Image' />
                    </a>
                  </Link>
                </div>
                <div className='best-tour-info'>
                  <h4>
                    <Link href='/tour-details'>
                      <a>France Tour</a>
                    </Link>
                  </h4>
                  <div className='feature-tour-meta'>
                    <div className='feature-tour-time'>
                      <i className='ri-time-line'></i>5 days
                    </div>
                    <div className='feature-tour-review'>
                      <span className='rating'>4.8</span>
                      <i className='ri-star-fill'></i>
                      <span className='total-review'>(200)</span>
                    </div>
                  </div>
                  <div className='tour-price'>
                    <span>$800</span>
                    <span className='discount'>$1000</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
              <div className='best-tour-item style1'>
                <div className='best-tour-img'>
                  <Link href='/tour-details'>
                    <a>
                      <img src='/images/tour/tour-8.jpg' alt='Image' />
                    </a>
                  </Link>
                </div>
                <div className='best-tour-info'>
                  <h4>
                    <Link href='/tour-details'>
                      <a>Bali Tour</a>
                    </Link>
                  </h4>
                  <div className='feature-tour-meta'>
                    <div className='feature-tour-time'>
                      <i className='ri-time-line'></i>4 days
                    </div>
                    <div className='feature-tour-review'>
                      <span className='rating'>4.8</span>
                      <i className='ri-star-fill'></i>
                      <span className='total-review'>(200)</span>
                    </div>
                  </div>
                  <div className='tour-price'>
                    <span>$342</span>
                    <span className='discount'>$542</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
              <div className='best-tour-item style1'>
                <div className='best-tour-img'>
                  <Link href='/tour-details'>
                    <a>
                      <img src='/images/tour/tour-9.jpg' alt='Image' />
                    </a>
                  </Link>
                </div>
                <div className='best-tour-info'>
                  <h4>
                    <Link href='/tour-details'>
                      <a>Thailand Experience</a>
                    </Link>
                  </h4>
                  <div className='feature-tour-meta'>
                    <div className='feature-tour-time'>
                      <i className='ri-time-line'></i>7 days
                    </div>
                    <div className='feature-tour-review'>
                      <span className='rating'>4.8</span>
                      <i className='ri-star-fill'></i>
                      <span className='total-review'>(100)</span>
                    </div>
                  </div>
                  <div className='tour-price'>
                    <span>$942</span>
                    <span className='discount'>$1100</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
              <div className='best-tour-item style1'>
                <div className='best-tour-img'>
                  <Link href='/tour-details'>
                    <a>
                      <img src='/images/tour/tour-10.jpg' alt='Image' />
                    </a>
                  </Link>
                </div>
                <div className='best-tour-info'>
                  <h4>
                    <Link href='/tour-details'>
                      <a>Turkey Tour</a>
                    </Link>
                  </h4>
                  <div className='feature-tour-meta'>
                    <div className='feature-tour-time'>
                      <i className='ri-time-line'></i>
                      10 days
                    </div>
                    <div className='feature-tour-review'>
                      <span className='rating'>4.8</span>
                      <i className='ri-star-fill'></i>
                      <span className='total-review'>(200)</span>
                    </div>
                  </div>
                  <div className='tour-price'>
                    <span>$1442</span>
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

export default BestTour;
