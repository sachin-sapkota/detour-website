import React from 'react';
import Banner from '../components/HomeThree/Banner';
import FeatureTour from '../components/common/FeatureTour';
import Promo from '../components/common/Promo';
import SinglePromo from '../components/HomeThree/SinglePromo';
import Category from '../components/HomeThree/Category';
import BestTour from '../components/common/BestTour';
import ProvidedService from '../components/HomeThree/ProvidedService';
import AdventureTour from '../components/common/AdventureTour';
import RecommendTour from '../components/HomeThree/RecommendTour';
import About from '../components/common/About';
import Product from '../components/common/Product';
import NewsletterThree from '../components/common/NewsletterThree';
import Blog from '../components/common/Blog';

const Index3 = () => {
  return (
    <>
      <Banner />

      <Promo 
        bgStyle='style3' 
      />

      <div className="pb-100">
        <FeatureTour 
          viewButton={true} 
        />
      </div>

      <SinglePromo />

      <Category />

      <BestTour 
        cardStyle='style3' 
        shape={true} 
      />

      <ProvidedService />

      <AdventureTour 
        radiusStyle='style2' 
        shape={true} 
      />

      <RecommendTour />

      <About
        bgColor='bg-heath'
        featureStyle='style3'
        ptb100='ptb-100'
        shape={true}
      />

      <div className="pt-100">
        <Product />
      </div>

      <NewsletterThree />

      <Blog 
        blogStyle='style3' 
        pt100='pt-100' 
      />
    </>
  );
};

export default Index3;
