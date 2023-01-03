import React from 'react';
import PageBanner from '../components/common/PageBanner';
import TourDetailsContent from '../components/Tour/TourDetailsContent';

const TourDetails = () => {
  return (
    <>
      <PageBanner
        bannerTitle='South Island, Newzealand'
        pageName='Tour Details'
      />

      <section className='tour-details-wrap pb-100'>

        <TourDetailsContent />

      </section>
    </>
  );
};

export default TourDetails;
