import React from 'react';
import Banner from '../components/HomeOne/Banner';
import RecommendTour from '../components/HomeOne/RecommendTour';
import Quote from '../components/HomeOne/Quote';
import AboutVideo from '../components/HomeOne/AboutVideo';
import Expertise from '../components/HomeOne/Expertise';
import Partner from '../components/HomeOne/Partner';
import Destination from '../components/HomeOne/Destination';
import Specialties from '../components/HomeOne/Specialties';
import AdventureTour from '../components/HomeOne/AdventureTour';


const index = () => {
  return (
    <>
      <Banner />

      <AboutVideo />

      <Quote
        imgOne="/images/service/service-1.png"
        imgTwo="/images/service/service-2.png"
        imgThree="/images/service/service-3.png"
        imgFour="/images/service/service-4.png"
      />

      <Expertise />

      <Partner
        partner1="/images/partners/partners-1.png"
        partner2="/images/partners/partners-2.png"
        partner3="/images/partners/partners-3.jpeg"
        partner4="/images/partners/partners-4.png"
        partner5="/images/partners/partners-5.png"
      />

      <RecommendTour
        des1="india"
        des2="germany"
        des3="thailand"
        des4="malaysia"
        des5="canada"
      />

      <Specialties
        spec1="/images/team/team-1.jpg"
        spec2="/images/team/team-2.jpg"
        spec3="/images/team/team-3.jpg"
        spec4="/images/team/team-4.jpg"
        spec5="/images/team/team-5.jpg"
      />
      
      <div className="pt-100">
        <AdventureTour />
      </div>

    </>
  );
};

export default index;
