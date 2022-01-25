import React from 'react';
import Link from 'next/link';

const Partners = ({ partner1, partner2, partner3, partner4, partner5 }) => {
  return (
    <>
      <section className='service-wrap pt-100'>
        <div className='container'>
          <div className='row mb-40 align-items-end'>
            <div className='col-md-12'>
              <div className='section-title style1 text-center'>
                <h2>Our Partners</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-1 col-md-1 col-sm-1'></div>
            <div className='col-lg-2 col-md-6 col-sm-6'>
              <div className='service-item style1'>
                <div className='service-img'>
                  <Link href='/tours'>
                    <a>
                      <img src={partner1} alt='Image' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
              <div className='service-item style1'>
                <div className='service-img'>
                  <Link href='/tours'>
                    <a>
                      <img src={partner2} alt='Image' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
              <div className='service-item style1'>
                <div className='service-img'>
                <Link href='/tours'>
                  <a>
                    <img src={partner3} alt='Image' />
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
              <div className='service-item style1'>
                <div className='service-img'>
                <Link href='/tours'>
                  <a>
                    <img src={partner4} alt='Image' />
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2'>
              <div className='service-item style1'>
                <div className='service-img'>
                <Link href='/tours'>
                  <a>
                    <img src={partner5} alt='Image' />
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-1 col-md-1 col-sm-1'></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
