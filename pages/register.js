import React from 'react';
import PageBanner from '../components/common/PageBanner';
import RegisterArea from '../components/Authentication/RegisterArea';

const Register = () => {
  return (
    <>
      <PageBanner bannerTitle='Get Start With Us' pageName='Register' />
      <RegisterArea/>

    </>
  );
};

export default Register;
