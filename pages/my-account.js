import React from 'react';
import PageBanner from '../components/common/PageBanner';
import MyAccountNavbar from '../components/MyAccount.js/MyAccountNavbar';

const MyAccount = () => {
  return (
    <>
      <PageBanner bannerTitle='My Account' pageName=' My Account' />
      <MyAccountNavbar />
    </>
  );
};

export default MyAccount;
