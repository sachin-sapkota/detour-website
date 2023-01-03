import React from 'react';
import Link from 'next/link';

const Specialties = ({ spec1, spec2, spec3, spec4, spec5 }) => {
  return (
    <>
      <section className='service-wrap pt-100 pb-50'>
        <div className='container'>
          <div className='row mb-40 align-items-end'>
            <div className='col-md-12'>
              <div className='section-title style1 text-center'>
                <h2>Top Specialties</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-1 col-md-1 col-sm-1'></div>
            <div className='col-lg-2 col-md-6 col-sm-2'>
              <div className='service-item style1'>
                <div className='service-img'>
                  <Link href='/tours'>
                    <a>
                      <img src={spec1} alt='Image' />
                    </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <Link href="/tours">
                    <a>Cancer treatment</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
              <div className='service-item style1'>
                <div className='service-img'>
                  <Link href='/tours'>
                    <a>
                      <img src={spec2} alt='Image' />
                    </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <Link href="/tours">
                    <a>Cardiac Surgery</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
              <div className='service-item style1'>
                <div className='service-img'>
                <Link href='/tours'>
                  <a>
                    <img src={spec3} alt='Image' />
                  </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <Link href="/tours">
                    <a>Fertility Treatment</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
              <div className='service-item style1'>
                <div className='service-img'>
                <Link href='/tours'>
                  <a>
                    <img src={spec4} alt='Image' />
                  </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <Link href="/tours">
                    <a>Neurology</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
              <div className='service-item style1'>
                <div className='service-img'>
                <Link href='/tours'>
                  <a>
                    <img src={spec5} alt='Image' />
                  </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <Link href="/tours">
                    <a>Orthopedic Surgery</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-1 col-md-1 col-sm-1'></div>
          </div>
          <div className='row mt-20'>
            <div className='col-12 text-center'>
            <Link href='/tours'>
              <a className='btn v2'>
                VIEW ALL SPECIALTIES
              </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specialties;
