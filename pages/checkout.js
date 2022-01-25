import React from 'react';
import PageBanner from '../components/common/PageBanner';
import CheckoutArea from '../components/Checkout/CheckoutArea';

const Checkout = () => {
  return (
    <>
      <PageBanner bannerTitle='Checkout' pageName='checkout' />
      <CheckoutArea />
    </>
  );
};

export default Checkout;
