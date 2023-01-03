import React from 'react';
import PageBanner from '../components/common/PageBanner';
import SearchTour from '../components/Tour/SearchTour';
import TourWithFIlter from '../components/Tour/TourWithFIlter';

const Tours = () => {
  return (
    <>
      <PageBanner bannerTitle='Find Best Tours' pageName='Tour' />
      <SearchTour/>
      <TourWithFIlter/>
    </>
  );
};

export default Tours;
