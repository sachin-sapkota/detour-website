import React from 'react';
import PageBannerTwo from '../components/common/PageBannerTwo';
import ShopNoSidebarContent from '../components/Shop/ShopNoSidebarContent';

const ShopNoSidebar = () => {
  return (
    <>
      <PageBannerTwo bannerTitle='Our Products' pageName='Shop No Sidebar' />
      <ShopNoSidebarContent />
    </>
  );
};

export default ShopNoSidebar;
