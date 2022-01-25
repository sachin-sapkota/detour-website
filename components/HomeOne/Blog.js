import React from 'react';
import Link from 'next/link';

const Blog = () => {
  return (
    <>
      <section className='blog-wrap pt-0 pb-0'>
        <div className='container'>
          <div className='row justify-content-md-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='blog-card style1'>
                <div className='blog-img'>
                  <Link href='/blog-details-left-sidebar'>
                    <a>
                      <img src='/images/blog/blog-1.jpg' alt='Image' />
                    </a>
                  </Link>
                  <span className='blog-date'>
                    <i className='ri-time-line'></i>
                    06 Feb , 2021
                  </span>
                </div>
                <div className='blog-info'>
                  <div className='blog-meta'>
                    <span>
                      By <Link href='/blog-details-left-sidebar'><a>Admin</a></Link>
                    </span>
                    <span>
                    <Link href='/blog-details-left-sidebar'>
                      <a>4 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h3 className='blog-title'>
                  <Link href='/blog-details-left-sidebar'>
                    <a>
                      24 Of Our Favorite Things To Do In Cape Town And Around
                    </a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='blog-card style1'>
                <div className='blog-img'>
                <Link href='/blog-details-left-sidebar'>
                  <a>
                    <img src='/images/blog/blog-5.jpg' alt='Image' />
                  </a>
                  </Link>
                  <span className='blog-date'>
                    <i className='ri-time-line'></i>
                    26 Jan , 2021
                  </span>
                </div>
                <div className='blog-info'>
                  <div className='blog-meta'>
                    <span>
                      By <Link href='/blog-details-left-sidebar'><a>Admin</a></Link>
                    </span>
                    <span>
                    <Link href='/blog-details-left-sidebar'>
                      <a>2 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h3 className='blog-title'>
                  <Link href='/blog-details-left-sidebar'>
                    <a>
                      Our Favorite Things To Do In The Fascinating City Of
                      Córdoba
                    </a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='blog-card style1'>
                <div className='blog-img'>
                <Link href='/blog-details-left-sidebar'>
                  <a>
                    <img src='/images/blog/blog-3.jpg' alt='Image' />
                  </a>
                  </Link>
                  <span className='blog-date'>
                    <i className='ri-time-line'></i>
                    15 Jan , 2021
                  </span>
                </div>
                <div className='blog-info'>
                  <div className='blog-meta'>
                    <span>
                      By <Link href='/blog-details-left-sidebar'><a>Admin</a></Link>
                    </span>
                    <span>
                    <Link href='/blog-details-left-sidebar'>
                      <a>3 Comments</a>
                      </Link>
                    </span>
                  </div>
                  <h3 className='blog-title'>
                  <Link href='/blog-details-left-sidebar'>
                    <a>
                      Mexico Road Trip – Impressions Of A Challenging Journey
                    </a>
                    </Link>
                  </h3>
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
