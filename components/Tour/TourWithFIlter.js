import React from 'react';
import Link from 'next/link';

const TourWithFIlter = () => {
  return (
    <>
      <div className='tour-wrap pt-100 pb-100'>
        <div className='container'>
          <div className='row align-items-center mb-25'>
            <div className='col-xl-7 col-lg-5 col-md-4'>
              <div className='profuct-result'>
                <p>4 Upcoming Tour Found</p>
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 col-md-4'>
              <div className='filter-item-cat'>
                <select className='shop-sort'>
                  <option value='1'>Sort By Most Popular</option>
                  <option value='2'>Sort By High To Low</option>
                  <option value='3'>Sort By Low To High</option>
                </select>
                <span className='hero-filter-down-arrow'>
                  <i className='ri-arrow-down-s-line'></i>
                </span>
              </div>
            </div>
            <div className='col-xl-2 col-lg-3 col-md-4'>
              <div className='filter-item-num'>
                <select className='shop-count-sort'>
                  <option value='1'>Show 10</option>
                  <option value='2'>Show 20</option>
                  <option value='3'>Show 30</option>
                </select>
                <span className='hero-filter-down-arrow'>
                  <i className='ri-arrow-down-s-line'></i>
                </span>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-6 col-lg-12'>
              <div className='feature-tour-card style2'>
                <div className='row gx-0'>
                  <div className='col-md-6'>
                    <div className='feature-tour-img feature-bg-1 bg-f'></div>
                  </div>
                  <div className='col-md-6'>
                    <div className='feature-tour-info'>
                      <h4>
                        <Link href='/tours'>
                          <a>France Experience</a>
                        </Link>
                      </h4>
                      <div className='feature-tour-meta'>
                        <div className='feature-tour-time'>
                          <i className='ri-time-line'></i>
                          10 days
                        </div>
                        <div className='feature-tour-review'>
                          <span className='rating'>4.5</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(80)</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                      <span className='feature-tour-price'>From <b>$1,412</b></span>
                      <div className='feature-tour-option'>
                        <Link href='/tour-details'>
                          <a className='link style1'>
                            Book Now <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>

                        <Link href='/tour-details'>
                          <a className='link style2'>
                            Tour Details
                            <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-12'>
              <div className='feature-tour-card style2'>
                <div className='row gx-0'>
                  <div className='col-md-6'>
                    <div className='feature-tour-img feature-bg-2 bg-f'></div>
                  </div>
                  <div className='col-md-6'>
                    <div className='feature-tour-info'>
                      <h4>
                      <Link href="/tours">
                        <a>Macao Experience</a>
                        </Link>
                      </h4>
                      <div className='feature-tour-meta'>
                        <div className='feature-tour-time'>
                          <i className='ri-time-line'></i>5 days
                        </div>
                        <div className='feature-tour-review'>
                          <span className='rating'>4.8</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(200)</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                      <span className='feature-tour-price'>From <b>$512</b></span>
                      <div className='feature-tour-option'>
                      <Link href="/tour-details">
                        <a className='link style1'>
                          Book Now <i className='ri-logout-circle-r-line'></i>
                        </a>
                        </Link>
                        <Link href="/tour-details">
                        <a className='link style2'>
                          Tour Details
                          <i className='ri-logout-circle-r-line'></i>
                        </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-12'>
              <div className='feature-tour-card style2'>
                <div className='row gx-0'>
                  <div className='col-md-6'>
                    <div className='feature-tour-img feature-bg-3 bg-f'></div>
                  </div>
                  <div className='col-md-6'>
                    <div className='feature-tour-info'>
                      <h4>
                      <Link href="/tours">
                        <a>Turkey Experience</a>
                        </Link>
                      </h4>
                      <div className='feature-tour-meta'>
                        <div className='feature-tour-time'>
                          <i className='ri-time-line'></i>3 days
                        </div>
                        <div className='feature-tour-review'>
                          <span className='rating'>4.5</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(65)</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                      <span className='feature-tour-price'>From <b>$412</b></span>
                      <div className='feature-tour-option'>
                      <Link href="/tour-details">
                        <a className='link style1'>
                          Book Now <i className='ri-logout-circle-r-line'></i>
                        </a>
                        </Link>
                        <Link href="/tour-details">
                        <a className='link style2'>
                          Tour Details
                          <i className='ri-logout-circle-r-line'></i>
                        </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-12'>
              <div className='feature-tour-card style2'>
                <div className='row gx-0'>
                  <div className='col-md-6'>
                    <div className='feature-tour-img feature-bg-4 bg-f'></div>
                  </div>
                  <div className='col-md-6'>
                    <div className='feature-tour-info'>
                      <h4>
                      <Link href="/tours">
                        <a>Bali Experience</a>
                        </Link>
                      </h4>
                      <div className='feature-tour-meta'>
                        <div className='feature-tour-time'>
                          <i className='ri-time-line'></i>5 days
                        </div>
                        <div className='feature-tour-review'>
                          <span className='rating'>4.8</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(200)</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                      <span className='feature-tour-price'>From <b>$512</b></span>
                      <div className='feature-tour-option'>
                      <Link href="/tour-details">
                        <a className='link style1'>
                          Book Now <i className='ri-logout-circle-r-line'></i>
                        </a>
                        </Link>
                        <Link href="/tour-details">
                          <a className='link style2'>
                            Tour Details
                            <i className='ri-logout-circle-r-line'></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-12'>
              <div className='feature-tour-card style2'>
                <div className='row gx-0'>
                  <div className='col-md-6'>
                    <div className='feature-tour-img feature-bg-5 bg-f'></div>
                  </div>
                  <div className='col-md-6'>
                    <div className='feature-tour-info'>
                      <h4>
                      <Link href="/tours">
                        <a>Evally Experience</a>
                        </Link>
                      </h4>
                      <div className='feature-tour-meta'>
                        <div className='feature-tour-time'>
                          <i className='ri-time-line'></i>
                          10 days
                        </div>
                        <div className='feature-tour-review'>
                          <span className='rating'>4.5</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(80)</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                      <span className='feature-tour-price'>From <b>$1,412</b></span>
                      <div className='feature-tour-option'>
                      <Link href="/tour-details">
                        <a className='link style1'>
                          Book Now <i className='ri-logout-circle-r-line'></i>
                        </a>
                        </Link>
                        <Link href="/tour-details">
                        <a className='link style2'>
                          Tour Details
                          <i className='ri-logout-circle-r-line'></i>
                        </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-12'>
              <div className='feature-tour-card style2'>
                <div className='row gx-0'>
                  <div className='col-md-6'>
                    <div className='feature-tour-img feature-bg-6 bg-f'></div>
                  </div>
                  <div className='col-md-6'>
                    <div className='feature-tour-info'>
                      <h4>
                      <Link href="/tours">
                        <a>Southland Experience</a>
                        </Link>
                      </h4>
                      <div className='feature-tour-meta'>
                        <div className='feature-tour-time'>
                          <i className='ri-time-line'></i>6 days
                        </div>
                        <div className='feature-tour-review'>
                          <span className='rating'>4.8</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(200)</span>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore.
                      </p>
                      <span className='feature-tour-price'>From <b>$512</b></span>
                      <div className='feature-tour-option'>
                      <Link href="/tour-details">
                        <a className='link style1'>
                          Book Now <i className='ri-logout-circle-r-line'></i>
                        </a>
                        </Link>
                        <Link href="/tour-details">
                        <a className='link style2'>
                          Tour Details
                          <i className='ri-logout-circle-r-line'></i>
                        </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='page-navigation'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <ul className='page-nav'>
                      <li>
                        <a>
                          
                          <i className='ri-arrow-left-s-line'></i>
                        </a>
                      </li>
                      <li>
                        <a className='active'>
                          1
                        </a>
                      </li>
                      <li>
                        <a>2</a>
                      </li>
                      <li>
                        <a>3</a>
                      </li>
                      <li>
                        <a>
                          
                          <i className='ri-arrow-right-s-line'></i>
                        </a>
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

export default TourWithFIlter;
