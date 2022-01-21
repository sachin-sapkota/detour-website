import React from 'react';
import Link from 'next/link';

const ProvidedService = () => {
  return (
    <>
      <section className='service-wrap pb-100'>
        <div className='container'>
          <div className='row mb-40 align-items-end'>
            <div className='col-md-12'>
              <div className='section-title style4 text-center'>
                <span>Our All</span>
                <h2>Provided Services</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='service-item style2'>
                <div className='service-img'>
                  <Link href='/tours'>
                    <a>
                      <img src='/images/service/service-4.jpg' alt='Image' />
                    </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <h4>
                  <Link href="/tours">
                    <a>Car Rental Services</a>
                    </Link>
                  </h4>
                  <p>100+ Listing</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='service-item style2'>
                <div className='service-img'>
                <Link href="/tours">
                  <a>
                    <img src='/images/service/service-2.jpg' alt='Image' />
                  </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <h4>
                  <Link href="/tours">
                    <a>Hotel Booking </a>
                    </Link>
                  </h4>
                  <p>65+ Listing</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='service-item style2'>
                <div className='service-img'>
                <Link href="/tours">
                  <a>
                    <img src='/images/service/service-1.jpg' alt='Image' />
                  </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <h4>
                  <Link href="/tours">
                    <a>Restaurent</a>
                    </Link>
                  </h4>
                  <p>90+ Listing</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='service-item style2'>
                <div className='service-img'>
                <Link href="/tours">
                  <a>
                    <img src='/images/service/service-3.jpg' alt='Image' />
                  </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <h4>
                  <Link href="/tours">
                    <a>Club & Bar</a>
                    </Link>
                  </h4>
                  <p>45+ Listing</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 text-center'>
            <Link href="/tours">
              <a className='btn v2'>
                All Services <i className='ri-logout-circle-r-line'></i>
              </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProvidedService;
