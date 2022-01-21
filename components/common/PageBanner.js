import React from 'react';
import Link from 'next/link';

const PageBanner = ({ bannerTitle, pageName }) => {
  return (
    <>
      <section className='breadcrumb-wrap style2 bg-heath'>
        <div className='container'>
          <div className='row'>
            <div
              className='
                col-xl-8
                offset-xl-2
                col-lg-10
                offset-lg-1
                col-md-10
                offset-md-1
              '
            >
              <div className='breadcrumb-title'>
                <h2>{bannerTitle}</h2>
                <ul className='breadcrumb-menu'>
                  <li>
                    <Link href='/'>
                      <a>Home </a>
                    </Link>
                    <i className='las la-angle-double-right'></i>
                  </li>
                  <li>{pageName}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageBanner;
