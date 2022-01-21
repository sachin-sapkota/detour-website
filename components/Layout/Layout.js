import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// navbar
import Navbar from './Navbar';
import NavbarTwo from './NavbarTwo';
import NavbarThree from './NavbarThree';

// footer
import Footer from './Footer';
import FooterTwo from './FooterTwo';

const Layout = ({ children }) => {

    const router = useRouter();

    const { pathname } = router;

  return (
    <>
      <Head>
        <title>Detour - React Next.js Travel Booking Template</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta
          name='description'
          content='Detour - React Next.js Travel Booking Template'
        />
        <meta
          name='og:title'
          property='og:title'
          content='Detour - React Next.js Travel Booking Template'
        ></meta>
        <meta
          name='twitter:card'
          content='Detour - React Next.js Travel Booking Template'
        ></meta>
        <link rel='canonical' href='https://detour.hibootstrap.com'></link>
      </Head>
 
      {pathname === '/index-3' ? (
        <NavbarThree />
      ) : pathname === '/index-2' ? (
        <NavbarTwo />
      ) : (
        <Navbar />
      )}
     
      {children}

      {pathname === '/index-3' ? (
        <FooterTwo />
      ) : pathname === '/index-2' ? (
        <FooterTwo />
      ) : pathname === '/destination' ? (
        <FooterTwo />
      ) :pathname === '/destination-details' ? (
        <FooterTwo />
      ) : (
        <Footer />
      )}
      
    </>
  );
};

export default Layout;
