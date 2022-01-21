import React from 'react';
import PageBannerTwo from '../components/common/PageBannerTwo';
import About from '../components/common/About';
import Service from '../components/common/Service';
import BestTour from '../components/common/BestTour';
import NewsletterThree from '../components/common/NewsletterThree';

const AboutUs = () => {
  return (
    <>
      <PageBannerTwo
        bannerTitle='About Us'
        pageName='About Us'
      />

      <About bgColor="bg-heath" featureStyle="style3" ptb100="ptb-100" shape={true}/>
      
      <Service/>

      <BestTour cardStyle="style2" shape={false}/>

      <div className="pb-100">
        <NewsletterThree />
      </div>
    </>
  );
};

export default AboutUs;
