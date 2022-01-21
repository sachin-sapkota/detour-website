import React from 'react';
import Link from 'next/link';

const SinglePromo = () => {
  return (
    <>
      <div className='promo-tour bg-f promo-tour-1'>
        <div className='container'>
          <div className='row'>
            <div
              className='
                col-xl-3
                offset-xl-9
                col-lg-4
                offset-lg-8
                col-md-6
                offset-md-6
              '
            >
              <div className='promo-tour-details'>
                <div className='shape-12'>
                  <img src='/images/tour/shape-12.png' alt='Image' />
                </div>
                <h4>Yellowstone national park, USA</h4>
                <p>
                  Lorem ipsum dolor sit amet, conset etur sadipscing elitr, sed
                  diam elitr, sed nonumy eirmod tempor.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam aliquyam era..
                </p>
                <Link href="/tour-details">

                <a className='link style1'>
                  Tour Details <i className='ri-logout-circle-r-line'></i>
                </a>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePromo;
