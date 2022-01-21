import React from 'react';
import PageBanner from '../components/common/PageBanner';
import ShopDetailsContent from '../components/Shop/ShopDetailsContent';

const ShopDetails = () => {
  return (
    <>
      <PageBanner bannerTitle='Shop Details' pageName='Shop Details' />
      <ShopDetailsContent/>
    </>
  );
};

export default ShopDetails;
