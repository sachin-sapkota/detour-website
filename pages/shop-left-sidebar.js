import React from 'react';
import PageBannerTwo from '../components/common/PageBannerTwo';
import ShopLeftContent from '../components/Shop/ShopLeftContent';

const ShopLeftSidebar = () => {
  return (
    <>
      <PageBannerTwo
        bannerTitle='Our Products'
        pageName='Shop Left Sidebar'
      />
      <ShopLeftContent/>
    </>
  );
};

export default ShopLeftSidebar;
