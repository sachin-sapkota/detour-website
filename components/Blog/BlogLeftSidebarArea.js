import React from 'react';
import Link from 'next/link';

const BlogLeftSidebarArea = () => {
  return (
    <>
      <div className='post-details pt-100 pb-100'>
        <div className='container'>
          <div className='row gx-5'>
            <div className='col-xl-3 col-lg-4 order-xl-1 order-lg-2 order-md-2 order-2'>
              <div className='sidebar'>
                <div className='sidebar-widget search-box'>
                  <input type='search' placeholder='Search By Keywords' />
                  <button type='submit'>
                    <i className='ri-search-line'></i>{' '}
                  </button>
                </div>

                <div className='sidebar-widget recent-post'>
                  <h4>Popular Posts </h4>
                  <div className='popular-post-widget'>
                    <div className='pp-post-item'>
                      <div className='pp-post-img'>
                        <img
                          src='/images/blog/post-thumb-1.jpg'
                          alt='Image'
                        />
                      </div>
                      <div className='pp-post-info'>
                        <span>09 Jan 2021</span>
                        <h6>
                        <Link href='/blog-details-no-sidebar'>
                          <a>
                            Lessons In Planning And Traveling During COVID-19
                          </a>
                          </Link>
                        </h6>
                      </div>
                    </div>

                    <div className='pp-post-item'>
                      <div className='pp-post-img'>
                        <img
                          src='/images/blog/post-thumb-2.jpg'
                          alt='Image'
                        />
                      </div>
                      <div className='pp-post-info'>
                        <span>08 Jan 2021</span>
                        <h6>
                        <Link href='/blog-details-no-sidebar'>
                          <a>
                            How To Pack For The Camino De Santiago
                          </a>
                          </Link>
                        </h6>
                      </div>
                    </div>

                    <div className='pp-post-item'>
                      <div className='pp-post-img'>
                        <img
                          src='/images/blog/post-thumb-3.jpg'
                          alt='Image'
                        />
                      </div>
                      <div className='pp-post-info'>
                        <span>15 Dec 2020</span>
                        <h6>
                        <Link href='/blog-details-no-sidebar'>
                          <a>
                            Best Street Food Around the World
                          </a>
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='sidebar-widget categories'>
                  <h4>Popular Category</h4>
                  <div className='category-box'>
                    <ul>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>City Travel</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>Hiking</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>Historical Places</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>Nature</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>Sea Beaches</a>
                        </Link>
                      </li>
                      <li>
                        <a>World Tourism</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='sidebar-widget tags'>
                  <h4>Popular Tags </h4>
                  <div className='tag-list'>
                    <ul>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>Tourism</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>Hiking </a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>Nature</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>Sea </a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>Travel</a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>Ocean </a>
                        </Link>
                      </li>
                      <li>
                        <Link href='/blog-details-left-sidebar'>
                          <a>Group Tour</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-9 col-lg-8 order-xl-2 order-lg-1 order-md-1 order-1'>
              <div className='row justify-content-md-center'>
                <div className='col-lg-6 col-md-6'>
                  <div className='blog-card style1'>
                    <div className='blog-img'>
                      <Link href='/blog-details-left-sidebar'>
                        <a>
                          <img src='/images/blog/blog-1.jpg' alt='Image' />
                        </a>
                      </Link>
                      <span className='blog-date'>
                        <i className='ri-time-line'></i>
                        06 Jan , 2021
                      </span>
                    </div>
                    <div className='blog-info'>
                      <div className='blog-meta'>
                        <span>
                          By  <Link href='/blog-details-right-sidebar'><a>Admin</a></Link>
                        </span>
                        <span>
                        <Link href='/blog-details-left-sidebar'>
                          <a>
                            4 Comments
                          </a>
                          </Link>
                        </span>
                      </div>
                      <h3 className='blog-title'>
                      <Link href='/blog-details-left-sidebar'>
                        <a>
                          24 Of Our Favorite Things To Do In Cape Town And
                          Around
                        </a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
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
                          By  <Link href='/blog-details-right-sidebar'><a>Admin</a></Link>
                        </span>
                        <span>
                          <Link href='/blog-details-no-sidebar'>
                            <a>
                              2 Comments
                            </a>
                          </Link>
                        </span>
                      </div>
                      <h3 className='blog-title'>
                        <Link href='/blog-details-no-sidebar'>
                          <a>
                            Our Favorite Things To Do In The Fascinating City Of
                            Córdoba
                          </a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='blog-card style1'>
                    <div className='blog-img'>
                      <Link href='/blog-details-left-sidebar'>
                        <a>
                          <img src='/images/blog/blog-3.jpg' alt='Image' />
                        </a>
                      </Link>
                      <span className='blog-date'>
                        <i className='ri-time-line'></i>
                        19 Jan , 2021
                      </span>
                    </div>
                    <div className='blog-info'>
                      <div className='blog-meta'>
                        <span>
                          By 
                          <Link href='/blog-details-right-sidebar'><a>Admin</a></Link>
                        </span>
                        <span>
                          <Link href="/blog-details-left-sidebar">
                            <a>
                              3 Comments
                            </a>
                          </Link>
                        </span>
                      </div>
                      <h3 className='blog-title'>
                        <Link href="/blog-details-left-sidebar">
                          <a>
                            Mexico Road Trip – Impressions Of A Challenging
                            Journey
                          </a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='blog-card style1'>
                    <div className='blog-img'>
                      <Link href="/blog-details-left-sidebar">
                        <a>
                          <img src='/images/blog/blog-8.jpg' alt='Image' />
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
                          By <Link href="/blog-details-left-sidebar"><a>Admin</a>
                            </Link>
                        </span>
                        <span>
                          <Link href="/blog-details-left-sidebar">
                            <a>
                              4 Comments
                            </a>
                          </Link>
                        </span>
                      </div>
                      <h3 className='blog-title'>
                        <Link href="/blog-details-left-sidebar">
                          <a>
                            Durmitor National Park & Zabljak: Montenegro’s
                            Spectacular Mountain
                          </a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='blog-card style1'>
                    <div className='blog-img'>
                      <Link href="/blog-details-left-sidebar">
                        <a>
                          <img src='/images/blog/blog-4.jpg' alt='Image' />
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
                          By <Link href="/blog-details-left-sidebar"><a>Admin</a></Link>
                        </span>
                        <span>
                          <Link href="/blog-details-left-sidebar">
                            <a>
                              2 Comments
                            </a>
                          </Link>
                        </span>
                      </div>
                      <h3 className='blog-title'>
                        <Link href="/blog-details-left-sidebar">
                          <a>
                            5 Days In A Quiet Place Near Silicon
                          </a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='blog-card style1'>
                    <div className='blog-img'>
                      <Link href="/blog-details-left-sidebar">
                        <a>
                          <img src='/images/blog/blog-6.jpg' alt='Image' />
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
                          By <Link href="/blog-details-left-sidebar"><a>Admin</a></Link>
                        </span>
                        <span>
                          <Link href="/blog-details-left-sidebar">
                            <a>
                              3 Comments
                            </a>
                          </Link>
                        </span>
                      </div>
                      <h3 className='blog-title'>
                      <Link href="/blog-details-left-sidebar">
                        <a>
                          10 Tips To Book Best Hotel For You
                        </a>
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='page-navigation'>
                <div className='row'>
                  <div className='col-lg-12 '>
                    <ul className='page-nav'>
                      <li>
                        <Link href="/blog-details-left-sidebar">
                          <a>
                            <i className='ri-arrow-left-s-line'></i>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details-left-sidebar">
                          <a className='active'>
                            1
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details-left-sidebar">
                          <a>2</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details-left-sidebar">
                          <a>3</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog-details-left-sidebar">
                          <a>
                            <i className='ri-arrow-right-s-line'></i>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogLeftSidebarArea;
