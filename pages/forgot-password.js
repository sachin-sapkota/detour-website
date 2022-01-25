import React from 'react';
import PageBanner from '../components/common/PageBanner';
import ForgotPasswordArea from '../components/Authentication/ForgotPasswordArea';

const ForgotPassword = () => {
  return (
    <>
      <PageBanner bannerTitle='Forgot Password' pageName='forgot password' />
      <ForgotPasswordArea />
    </>
  );
};

export default ForgotPassword;
