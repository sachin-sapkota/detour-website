import React, { useState, useEffect } from 'react';

import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/remixicon.css';
import '../public/css/line-awesome.min.css';
import '../public/css/flaticon.css';
import '../public/css/nice-select.css';
import 'react-input-range/lib/css/index.css';
import 'swiper/swiper.min.css';
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import '../public/css/page-css/general.css';
import '../public/css/page-css/header.css';
import '../public/css/page-css/footer.css';
import '../public/css/page-css/home.css';
import '../public/css/page-css/responsive.css';
import '../public/css/page-css/custom.css';

import Layout from '../components/Layout/Layout';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
      <Loader loading={loading} />
      <GoTop scrollStepInPx='100' delayInMs='10.50' />
    </Layout>
  );
}

export default MyApp;
