import React from 'react';
import Link from 'next/link';

const FeatureTour = () => {
  return (
    <>
      <section className='feature-wrap pt-100 pb-70 bg-heath'>
        <div className='container'>
          <div className='row mb-40 align-items-end'>
            <div className='col-md-8'>
              <div className='section-title style1 sm-center'>
                <span>Upcoming</span>
                <h2>Feature Tours</h2>
              </div>
            </div>
            <div className='col-md-4 text-md-end sm-none'>
              <Link href='/tours'>
                <a className='btn v2'>
                  View All Tours <i className='ri-logout-circle-r-line'></i>
                </a>
              </Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-6 col-lg-12'>
              <div className='feature-tour-card style1'>
                <div className='row gx-0'>
                  <div className='col-md-6'>
                    <Link href='/tours'>
                      <div className='feature-tour-img feature-bg-1 bg-f'></div>
                    </Link>
                  </div>
                  <div className='col-md-6'>
                    <div className='feature-tour-info'>
                      <h4>
                        <Link href='/tours'>
                          <a>France Experience</a>
                        </Link>
                      </h4>
                      <div className='feature-tour-meta'>
                        <div className='feature-tour-time'>
                          <i className='ri-time-line'></i>
                          10 days
                        </div>
                        <div className='feature-tour-review'>
                          <span className='rating'>4.5</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(80)</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                      <span className='feature-tour-price'>From $1,412</span>
                      <div className='feature-tour-option'>
                        <Link href='/tour-details'>
                          <a className='link style1'>
                            Book Now <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                        <Link href='/tour-details'>
                          <a className='link style2'>
                            Tour Details{' '}
                            <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-12'>
              <div className='feature-tour-card style1'>
                <div className='row gx-0'>
                  <div className='col-md-6'>
                  <Link href='/tours'>
                    <div className='feature-tour-img feature-bg-4 bg-f'></div>
                    </Link>
                  </div>
                  <div className='col-md-6'>
                    <div className='feature-tour-info'>
                      <h4>
                        <Link href='/tours'>
                          <a>Bali Experience</a>
                        </Link>
                      </h4>
                      <div className='feature-tour-meta'>
                        <div className='feature-tour-time'>
                          <i className='ri-time-line'></i> 5 days
                        </div>
                        <div className='feature-tour-review'>
                          <span className='rating'>4.8</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(200)</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                      <span className='feature-tour-price'>From $512</span>
                      <div className='feature-tour-option'>
                        <Link href='/tours-details'>
                          <a className='link style1'>
                            Book Now <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                        <Link href='/tours-details'>
                          <a className='link style2'>
                            Tour Details{' '}
                            <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row lg-none mb-30'>
            <div className='col-12 text-center'>
              <Link href='/tours'>
                <a className='btn v2'>
                  View All Tours <i className='ri-logout-circle-r-line'></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureTour;
