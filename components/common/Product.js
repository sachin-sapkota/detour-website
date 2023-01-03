import React from 'react';
import Link from 'next/link';

import dynamic from 'next/dynamic';
const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
);
import { resetIdCounter, Tab, TabList, TabPanel } from 'react-tabs';
resetIdCounter();

const Product = () => {
  return (
    <>
      <section className="product-wrap pb-70">
        <div className='shape-8 sm-none'>
          <img src='/images/shape-5.png' alt='Image' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-title style1 mb-40 text-center'>
                <span>Our Shop</span>
                <h2>Travel Accessories</h2>
              </div>
            </div>
          </div>

          {/* start ------------ */}
          <Tabs>
            <div className='row mb-20'>
              <div className='col-md-12'>
                <div className='controls product-filter-list'>
                  <TabList>
                    <Tab>
                      <button className='filter'>All</button>
                    </Tab>
                    <Tab>
                      <button className='filter'>Travel Bag</button>
                    </Tab>

                    <Tab>
                      <button className='filter'>Shoe</button>
                    </Tab>
                    <Tab>
                      <button className='filter'>Backpack</button>
                    </Tab>
                  </TabList>
                </div>
              </div>
            </div>
            <div className='row justify-content-center grid'>
              <TabPanel>
                <div
                  className='
                col-xl-3 col-lg-4 col-md-6 col-sm-6
                filter-item
                travel-bag
                
              '
                >
                  <div className='product-card style1'>
                    <div className='product-img'>
                      <img src='/images/product/product-1.jpg' alt='Image' />
                      <div className='product-option'>
                        <button className='quickview' type='button'>
                          <i className='ri-eye-off-line'></i>
                        </button>
                        <Link href='/wishlist'>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                        </Link>
                        <Link href='/cart'>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='product-info'>
                      <h4>
                        <Link href='/shop-details'>
                          <a>Large Suitcase</a>
                        </Link>
                      </h4>
                      <div className='product-rating'>
                        <span className='rating'>4.8</span>
                        <i className='ri-star-fill'></i>
                        <span className='total-review'>(120)</span>
                      </div>
                      <h6 className='product-price'>
                        From <span className='price-color'>$1,412</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className='
                col-xl-3 col-lg-4 col-md-6 col-sm-6
                filter-item
                backpack
                
              '
                >
                  <div className='product-card style1'>
                    <div className='product-img'>
                      <img src='/images/product/product-6.jpg' alt='Image' />
                      <div className='product-option'>
                        <button className='quickview' type='button'>
                          <i className='ri-eye-off-line'></i>
                        </button>
                        <Link href='/wishlist'>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                        </Link>
                        <Link href='/cart'>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='product-info'>
                      <h4>
                        <Link href='/shop-details'>
                          <a>Olive Backpack</a>
                        </Link>
                      </h4>
                      <div className='product-rating'>
                        <span className='rating'>4.9</span>
                        <i className='ri-star-fill'></i>
                        <span className='total-review'>(100)</span>
                      </div>
                      <h6 className='product-price'>
                        From <span className='price-color'>$512</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 filter-item shoe '>
                  <div className='product-card style1'>
                    <div className='product-img'>
                      <img src='/images/product/product-10.jpg' alt='Image' />
                      <div className='product-option'>
                        <button className='quickview' type='button'>
                          <i className='ri-eye-off-line'></i>
                        </button>
                        <Link href='/wishlist'>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                        </Link>
                        <Link href='/cart'>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='product-info'>
                      <h4>
                        <Link href='/shop-details'>
                          <a>Hiking Shoe</a>
                        </Link>
                      </h4>
                      <div className='product-rating'>
                        <span className='rating'>4.8</span>
                        <i className='ri-star-fill'></i>
                        <span className='total-review'>(87)</span>
                      </div>
                      <h6 className='product-price'>
                        From <span className='price-color'>$300</span>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className='
                col-xl-3 col-lg-4 col-md-6 col-sm-6
                filter-item
                travel-bag
                
              '
                >
                  <div className='product-card style1'>
                    <div className='product-img'>
                      <img src='/images/product/product-5.jpg' alt='Image' />
                      <div className='product-option'>
                        <button className='quickview' type='button'>
                          <i className='ri-eye-off-line'></i>
                        </button>
                        <Link href='/wishlist'>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                        </Link>
                        <Link href='/cart'>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='product-info'>
                      <h4>
                        <Link href='/shop-details'>
                          <a>Gucci Backpack</a>
                        </Link>
                      </h4>
                      <div className='product-rating'>
                        <span className='rating'>4.5</span>
                        <i className='ri-star-fill'></i>
                        <span className='total-review'>(100)</span>
                      </div>
                      <h6 className='product-price'>
                        From <span className='price-color'>$1,000</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* tab panel 2 */}
              <TabPanel>
                <div
                  className='
                col-xl-3 col-lg-4 col-md-6 col-sm-6
                filter-item
                travel-bag
                
              '
                >
                  <div className='product-card style1'>
                    <div className='product-img'>
                      <img src='/images/product/product-1.jpg' alt='Image' />
                      <div className='product-option'>
                        <button className='quickview' type='button'>
                          <i className='ri-eye-off-line'></i>
                        </button>
                        <Link href='/wishlist'>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                        </Link>
                        <Link href='/cart'>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='product-info'>
                      <h4>
                        <Link href='/shop-details'>
                          <a>Large Suitcase</a>
                        </Link>
                      </h4>
                      <div className='product-rating'>
                        <span className='rating'>4.8</span>
                        <i className='ri-star-fill'></i>
                        <span className='total-review'>(120)</span>
                      </div>
                      <h6 className='product-price'>
                        From <span className='price-color'>$1,412</span>
                      </h6>
                    </div>
                  </div>
                </div>

                <div
                  className='
                col-xl-3 col-lg-4 col-md-6 col-sm-6
                filter-item
                travel-bag
                
              '
                >
                  <div className='product-card style1'>
                    <div className='product-img'>
                      <img src='/images/product/product-5.jpg' alt='Image' />
                      <div className='product-option'>
                        <button className='quickview' type='button'>
                          <i className='ri-eye-off-line'></i>
                        </button>
                        <Link href='/wishlist'>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                        </Link>
                        <Link href='/cart'>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='product-info'>
                      <h4>
                        <Link href='/shop-details'>
                          <a>Gucci Backpack</a>
                        </Link>
                      </h4>
                      <div className='product-rating'>
                        <span className='rating'>4.5</span>
                        <i className='ri-star-fill'></i>
                        <span className='total-review'>(100)</span>
                      </div>
                      <h6 className='product-price'>
                        From <span className='price-color'>$1,000</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* tab panel 3 */}
              <TabPanel>
                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6 filter-item shoe '>
                  <div className='product-card style1'>
                    <div className='product-img'>
                      <img src='/images/product/product-10.jpg' alt='Image' />
                      <div className='product-option'>
                        <button className='quickview' type='button'>
                          <i className='ri-eye-off-line'></i>
                        </button>
                        <Link href='/wishlist'>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                        </Link>
                        <Link href='/cart'>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='product-info'>
                      <h4>
                        <Link href='/shop-details'>
                          <a>Hiking Shoe</a>
                        </Link>
                      </h4>
                      <div className='product-rating'>
                        <span className='rating'>4.8</span>
                        <i className='ri-star-fill'></i>
                        <span className='total-review'>(87)</span>
                      </div>
                      <h6 className='product-price'>
                        From <span className='price-color'>$300</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* tab panel 4 */}
              <TabPanel>
                <div
                  className='
                col-xl-3 col-lg-4 col-md-6 col-sm-6
                filter-item
                backpack
                
              '
                >
                  <div className='product-card style1'>
                    <div className='product-img'>
                      <img src='/images/product/product-6.jpg' alt='Image' />
                      <div className='product-option'>
                        <button className='quickview' type='button'>
                          <i className='ri-eye-off-line'></i>
                        </button>
                        <Link href='/wishlist'>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                        </Link>
                        <Link href='/cart'>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className='product-info'>
                      <h4>
                        <Link href='/shop-details'>
                          <a>Olive Backpack</a>
                        </Link>
                      </h4>
                      <div className='product-rating'>
                        <span className='rating'>4.9</span>
                        <i className='ri-star-fill'></i>
                        <span className='total-review'>(100)</span>
                      </div>
                      <h6 className='product-price'>
                        From <span className='price-color'>$512</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
          {/* end -------------- */}
        </div>
      </section>
    </>
  );
};

export default Product;
