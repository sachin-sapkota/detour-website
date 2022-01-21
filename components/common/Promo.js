import React from 'react';

const Promo = ({bgStyle,mt100}) => {
  return (
    <>
      <div className={`promo-wrap pt-100 pb-70 z-0 ${mt100}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className={`promo-item ${bgStyle}`}>
                <div className='promo-icon'>
                  <i className='flaticon-map'></i>
                </div>
                <div className='promo-content'>
                  <h4>Best Selections</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadip scing elitr,
                    sed diam nonumy eirmod.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className={`promo-item ${bgStyle}`}>
                <div className='promo-icon'>
                  <i className='flaticon-discount'></i>
                </div>
                <div className='promo-content'>
                  <h4>Reasonable Price</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadip scing elitr,
                    sed diam nonumy eirmod.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className={`promo-item ${bgStyle}`}>
                <div className='promo-icon'>
                  <i className='flaticon-credit-card'></i>
                </div>
                <div className='promo-content'>
                  <h4>Secure Payments</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadip scing elitr,
                    sed diam nonumy eirmod.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className={`promo-item ${bgStyle}`}>
                <div className='promo-icon'>
                  <i className='flaticon-support-1'></i>
                </div>
                <div className='promo-content'>
                  <h4>24/7 Support</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadip scing elitr,
                    sed diam nonumy eirmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
