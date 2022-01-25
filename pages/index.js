import React from 'react';
import Banner from '../components/HomeOne/Banner';
import SingleTour from '../components/HomeOne/SingleTour';
import Promo from '../components/HomeOne/Promo';
import AdventureTour from '../components/HomeOne/AdventureTour';
import BestTour from '../components/HomeOne/BestTour';
import RecommendTour from '../components/HomeOne/RecommendTour';
import Service from '../components/HomeOne/Service';
import Quote from '../components/HomeOne/Quote';
import Expertise from '../components/HomeOne/Expertise';
import Partner from '../components/HomeOne/Partner';
import Destination from '../components/HomeOne/Destination';
import Specialties from '../components/HomeOne/Specialties';
import FeatureTour from '../components/HomeOne/FeatureTour';
import About from '../components/HomeOne/About';
import Product from '../components/common/Product';
import Newsletter from '../components/common/Newsletter';
import Blog from '../components/HomeOne/Blog';

const index = () => {
  return (
    <>
      <Banner />

      <Quote
        imgOne='/images/service/service-1.png'
        imgTwo='/images/service/service-2.png'
        imgThree='/images/service/service-3.png'
        imgFour='/images/service/service-4.png'
      />

      <Expertise />

      <Partner
        partner1='/images/team/team-1.jpg'
        partner2='/images/team/team-2.jpg'
        partner3='/images/team/team-3.jpg'
        partner4='/images/team/team-4.jpg'
        partner5='/images/team/team-5.jpg'
      />

      <RecommendTour />

      <Destination
        des1='india'
        des2='germany'
        des3='thailand'
        des4='malaysia'
        des5='canada'
      />

      <Specialties 
        spec1='/images/team/team-1.jpg'
        spec2='/images/team/team-2.jpg'
        spec3='/images/team/team-3.jpg'
        spec4='/images/team/team-4.jpg'
        spec5='/images/team/team-5.jpg'
      />


    </>
  );
};

export default index;
