import React from 'react';
import Link from 'next/link';

const Category = () => {
  return (
    <>
      <section className='category-wrap pt-100 pb-75'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title style4 text-center mb-40'>
                <span>Tour Type</span>
                <h2>Tour Categories</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-6'>
              <div className='category-item bg-heath'>
                <div className='category-icon'>
                  <i className='flaticon-cityscape'></i>
                </div>
                <div className='category-text'>
                  <h4>
                  <Link href="/tours">
                    <a>City Tours</a>
                    </Link>
                  </h4>
                  <span>24+ tour</span>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-6'>
              <div className='category-item bg-heath'>
                <div className='category-icon'>
                  <i className='flaticon-coliseum'></i>
                </div>
                <div className='category-text'>
                  <h4>
                    <Link href='/tours'>
                      <a>Historical</a>
                    </Link>
                  </h4>
                  <span>44+ tour</span>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-6'>
              <div className='category-item bg-heath'>
                <div className='category-icon'>
                  <i className='flaticon-adventurer'></i>
                </div>
                <div className='category-text'>
                  <h4>
                    <Link href='/tours'>
                      <a>Hiking</a>
                    </Link>
                  </h4>
                  <span>10+ tour</span>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-6'>
              <div className='category-item bg-heath'>
                <div className='category-icon'>
                  <i className='flaticon-sunset'></i>
                </div>
                <div className='category-text'>
                  <h4>
                    <Link href='/tours'>
                      <a>Sea Beaches</a>
                    </Link>
                  </h4>
                  <span>24+ tour</span>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-6'>
              <div className='category-item bg-heath'>
                <div className='category-icon'>
                  <i className='flaticon-sail-boat'></i>
                </div>
                <div className='category-text'>
                  <h4>
                    <Link href='/tours'>
                      <a>Boat </a>
                    </Link>
                  </h4>
                  <span>15+ tour</span>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-lg-4 col-md-6 col-sm-6'>
              <div className='category-item bg-heath'>
                <div className='category-icon'>
                  <i className='flaticon-landscape'></i>
                </div>
                <div className='category-text'>
                  <h4>
                    <Link href='/tours'>
                      <a>Forest Tours</a>
                    </Link>
                  </h4>
                  <span>14+ tour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
