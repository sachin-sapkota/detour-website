import React from 'react';
import Link from 'next/link';

const Quote = ({ imgOne, imgTwo, imgThree, imgFour }) => {
  return (
    <>
      <section className='service-wrap pt-100'>
        <div className='container'>
          <div className='row mb-40 align-items-end'>
            <div className='col-md-12'>
              <div className='section-title style1 text-center'>
                <h2>The Simplest Process in Finding Healthcare Abroad</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='service-item style1'>
                <div className='service-img'>
                  <Link href='/tours'>
                    <a>
                      <img src={imgOne} alt='Image' />
                    </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <h4>
                    <Link href="/tours">
                    <a>Quote</a>
                    </Link>
                  </h4>
                  <p>
					  Request a quote directly<br/> 
					  through our website
				  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='service-item style1'>
                <div className='service-img'>
                  <Link href='/tours'>
                    <a>
                      <img src={imgTwo} alt='Image' />
                    </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <h4>
                  <Link href='/tours'>
                    <a>Match</a>
                    </Link>
                  </h4>
                  <p>
					  Based on your criteria,<br/>
					  we recommend the best <br/>
					  hospitals or providers
				  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='service-item style1'>
                <div className='service-img'>
                <Link href='/tours'>
                  <a>
                    <img src={imgThree} alt='Image' />
                  </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <h4>
                  <Link href='/tours'>
                    <a >Treat</a>
                    </Link>
                  </h4>
                  <p>
					Finalize your treatment<br/>
					with the hospital/provider <br/>
					of your choice
				  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='service-item style1'>
                <div className='service-img'>
                <Link href='/tours'>
                  <a>
                    <img src={imgFour} alt='Image' />
                  </a>
                  </Link>
                </div>
                <div className='service-info'>
                  <h4>
                  <Link href='/tours'>
                    <a>Control</a>
                    </Link>
                  </h4>
                  <p>
					Finalize your treatment <br/>
					with the hospital/provider <br/>
					of your choice
				  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-20'>
            <div className='col-12 text-center'>
            <Link href='/tours'>
              <a className='btn v2'>
			  	Request a Quote for Healthcare Now -> <i className='ri-logout-circle-r-line'></i>
              </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
