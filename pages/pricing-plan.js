import React from 'react';
import Link from 'next/link';
import PageBanner from '../components/common/PageBanner';

const PricingPlan = () => {
  return (
    <>
      <PageBanner bannerTitle='Pricing Plan' pageName='Pricing Plan' />
      <section className='Pricing-section pt-100 pb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-title style4 mb-40 text-center'>
                <span>Our</span>
                <h2>Pricing Plan</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='pricing-box-wrap style1'>
                <div className='pricing-box'>
                  <h5 className='pricing-box-name'>Basic</h5>
                  <div className='price-tag'>
                    <h3>
                      $29.99 <span>/per month</span>
                    </h3>
                  </div>
                  <ul className='price-box-features'>
                    <li>
                      <i className='las la-check'></i>Unlimited file recovery
                    </li>
                    <li>
                      <i className='las la-check'></i>Professional reports
                    </li>
                    <li className='text-decoration-line-through'>
                      <i className='las la-check'></i>Sell on marketplaces
                    </li>
                    <li className='text-decoration-line-through'>
                      <i className='las la-check'></i>24/7 free support
                    </li>
                  </ul>
                  <div className='book-btn'>
                    <Link href='/pricing-plan'>
                      <a className='btn v3'>Book Now</a>
                    </Link>
                  </div>
                </div>
                <div className='pricing-box active'>
                  <h5 className='pricing-box-name'>Professional</h5>
                  <div className='price-tag'>
                    <h3>
                      $39.99 <span>/per month</span>
                    </h3>
                  </div>
                  <div className='price-box-features'>
                    <ul className=''>
                      <li>
                        <i className='las la-check'></i>Unlimited file recovery
                      </li>
                      <li>
                        <i className='las la-check'></i>Professional reports
                      </li>
                      <li>
                        <i className='las la-check'></i>Sell on marketplaces
                      </li>
                      <li className='text-decoration-line-through'>
                        <i className='las la-check'></i>24/7 free support
                      </li>
                    </ul>
                  </div>
                  <div className='book-btn'>
                    <Link href='/pricing-plan'>
                      <a className='btn v4'>Book Now</a>
                    </Link>
                  </div>
                </div>
                <div className='pricing-box'>
                  <h5 className='pricing-box-name'>Business</h5>
                  <div className='price-tag'>
                    <h3>
                      $49.99 <span>/per month</span>
                    </h3>
                  </div>
                  <ul className='price-box-features'>
                    <li>
                      <i className='las la-check'></i>Unlimited file recovery
                    </li>
                    <li>
                      <i className='las la-check'></i>Professional reports
                    </li>
                    <li>
                      <i className='las la-check'></i>Sell on marketplaces
                    </li>
                    <li>
                      <i className='las la-check'></i>24/7 free support
                    </li>
                  </ul>
                  <div className='book-btn'>
                    <Link href='/pricing-plan'>
                      <a className='btn v3'>Book Now</a>
                    </Link>
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

export default PricingPlan;
