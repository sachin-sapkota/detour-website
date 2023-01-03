import React from 'react';
import Link from 'next/link';

const Blog = ({blogStyle,pt100}) => {
  return (
    <>
      <section className={`blog-wrap pb-70 ${pt100}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-title style4 text-center mb-40'>
                <span>BLOGS</span>
                <h2>Latest News And Updates</h2>
              </div>
            </div>
          </div>
          <div className='row justify-content-md-center'>
            <div className='col-lg-4 col-md-6'>
              <div className={`blog-card ${blogStyle}`}>
                <div className='blog-img'>
                <Link href='/blog-details-right-sidebar'>
                  <a>
                    <img src='/images/blog/blog-1.jpg' alt='Image' />
                  </a>
                  </Link>
                  <span className='blog-date'>
                    <i className='ri-time-line'></i>
                    06 February , 2021
                  </span>
                </div>
                <div className='blog-info'>
                  <h3 className='blog-title'>
                  <Link href='/blog-details-right-sidebar'>
                    <a>
                      24 Of Our Favorite Things To Do In Cape Town And Around
                    </a>
                    </Link>
                  </h3>
                  <div className='blog-meta'>
                    <span>
                      By{' '}
                      <Link href='/blog-details-right-sidebar'>
                      <a>Admin</a>
                      </Link>
                    </span>
                    <span>
                    <Link href='/blog-details-right-sidebar'>
                      <a>4 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className={`blog-card ${blogStyle}`}>
                <div className='blog-img'>
                <Link href='/blog-details-right-sidebar'>
                  <a>
                    <img src='/images/blog/blog-5.jpg' alt='Image' />
                  </a>
                  </Link>
                  <span className='blog-date'>
                    <i className='ri-time-line'></i>
                    26 January , 2021
                  </span>
                </div>
                <div className='blog-info'>
                  <h3 className='blog-title'>
                  <Link href='/blog-details-right-sidebar'>
                    <a>
                      Our Favorite Things To Do In The Fascinating City Of
                      Córdoba
                    </a>
                    </Link>
                  </h3>
                  <div className='blog-meta'>
                    <span>
                      By{' '}
                      <Link href='/blog-details-right-sidebar'>
                      <a >Admin</a>
                      </Link>
                    </span>
                    <span>
                    <Link href='/blog-details-right-sidebar'>
                      <a>2 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className={`blog-card ${blogStyle}`}>
                <div className='blog-img'>
                <Link href='/blog-details-right-sidebar'>
                  <a>
                    <img src='/images/blog/blog-3.jpg' alt='Image' />
                  </a>
                  </Link>
                  <span className='blog-date'>
                    <i className='ri-time-line'></i>
                    15 January , 2021
                  </span>
                </div>
                <div className='blog-info'>
                  <h3 className='blog-title'>
                  <Link href='/blog-details-right-sidebar'>
                    <a>
                      Mexico Road Trip – Impressions Of A Challenging Journey
                    </a>
                    </Link>
                  </h3>
                  <div className='blog-meta'>
                    <span>
                      By{' '}
                      <Link href='/blog-details-right-sidebar'>
                      <a>Admin</a>
                      </Link>
                    </span>
                    <span>
                    <Link href='/blog-details-right-sidebar'>
                      <a>3 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
