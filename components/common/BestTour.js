import React from 'react';
import Link from 'next/link'

const BestTour = ({ cardStyle, shape }) => {
  return (
    <>
      <section className='best-tour-wrap pb-70'>
        <div className='container'>
          <div className='row mb-40 align-items-end'>
            <div className='col-md-12'>
              <div className='section-title style4 text-center'>
                <span>UPCOMING</span>
                <h2>Best Tours</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className={`best-tour-item ${cardStyle} bg-f rec-bg-1`}>
                <div className='best-tour-info'>
                  {shape && (
                    <div className='shape-20'>
                      <img src='/images/shape-20.png' alt='Image' />
                    </div>
                  )}

                  <h4>
                  <Link href='/tour-details'>
                    <a>Sydney Tour</a>
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
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className={`best-tour-item ${cardStyle} bg-f rec-bg-5`}>
                <div className='best-tour-info'>
                  <h4>
                  <Link href='/tour-details'>
                    <a>Italy Tour</a>
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
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className={`best-tour-item ${cardStyle} bg-f rec-bg-2`}>
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
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className={`best-tour-item ${cardStyle} bg-f rec-bg-3`}>
                <div className='best-tour-info'>
                  <h4>
                  <Link href='/tour-details'>
                    <a>Rome Tour</a>
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
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className={`best-tour-item ${cardStyle} bg-f rec-bg-7`}>
                <div className='best-tour-info'>
                  <h4>
                  <Link href='/tour-details'>
                    <a>Makao Experience</a>
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
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className={`best-tour-item ${cardStyle} bg-f rec-bg-8`}>
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
