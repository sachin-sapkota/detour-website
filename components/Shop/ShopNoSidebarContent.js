import React from 'react';
import Link from 'next/link';

const ShopNoSidebarContent = () => {
  return (
    <>
      <div className='shop-wrap pt-100 pb-100'>
        <div className='container'>
          <div className='row gx-5'>
            <div className='col-xl-12'>
              <div className='content-wrapper'>
                <div className='row align-items-center mb-25'>
                  <div className='col-xl-7 col-lg-5 col-md-4'>
                    <div className='profuct-result'>
                      <p>Showing 10 of 120 Products</p>
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
                <div className='row justify-content-md-center'>
                  <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                    <div className='product-card style1'>
                      <div className='product-img'>
                        <img src='/images/product/product-1.jpg' alt='Image' />
                        <div className='product-option'>
                          <button className='quickview' type='button'>
                            <i className='ri-eye-off-line'></i>
                          </button>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
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
                          <span className='total-review'>(200)</span>
                        </div>
                        <h6 className='product-price'>From $1,412</h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                    <div className='product-card style1'>
                      <div className='product-img'>
                        <img src='/images/product/product-4.jpg' alt='Image' />
                        <div className='product-option'>
                          <button className='quickview' type='button'>
                            <i className='ri-eye-off-line'></i>
                          </button>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </div>
                      </div>
                      <div className='product-info'>
                        <h4>
                          <Link href='/shop-details'>
                            <a>Gucci Suitcase</a>
                          </Link>
                        </h4>
                        <div className='product-rating'>
                          <span className='rating'>4.8</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(200)</span>
                        </div>
                        <h6 className='product-price'>From $1,412</h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                    <div className='product-card style1'>
                      <div className='product-img'>
                        <img src='/images/product/product-5.jpg' alt='Image' />
                        <div className='product-option'>
                          <button className='quickview' type='button'>
                            <i className='ri-eye-off-line'></i>
                          </button>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </div>
                      </div>
                      <div className='product-info'>
                        <h4>
                          <Link href='/shop-details'>
                            <a>Olive Backpack</a>
                          </Link>
                        </h4>
                        <div className='product-rating'>
                          <span className='rating'>4.8</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(200)</span>
                        </div>
                        <h6 className='product-price'>From $1,412</h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                    <div className='product-card style1'>
                      <div className='product-img'>
                        <img src='/images/product/product-6.jpg' alt='Image' />
                        <div className='product-option'>
                          <button className='quickview' type='button'>
                            <i className='ri-eye-off-line'></i>
                          </button>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </div>
                      </div>
                      <div className='product-info'>
                        <h4>
                          <Link href='/shop-details'>
                            <a>Travel backpack</a>
                          </Link>
                        </h4>
                        <div className='product-rating'>
                          <span className='rating'>4.8</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(200)</span>
                        </div>
                        <h6 className='product-price'>From $1,412</h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                    <div className='product-card style1'>
                      <div className='product-img'>
                        <img src='/images/product/product-7.jpg' alt='Image' />
                        <div className='product-option'>
                          <button className='quickview' type='button'>
                            <i className='ri-eye-off-line'></i>
                          </button>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </div>
                      </div>
                      <div className='product-info'>
                        <h4>
                          <Link href='/shop-details'>
                            <a>Lenova Suitcase</a>
                          </Link>
                        </h4>
                        <div className='product-rating'>
                          <span className='rating'>4.8</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(200)</span>
                        </div>
                        <h6 className='product-price'>From $1,412</h6>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6'>
                    <div className='product-card style1'>
                      <div className='product-img'>
                        <img src='/images/product/product-8.jpg' alt='Image' />
                        <div className='product-option'>
                          <button className='quickview' type='button'>
                            <i className='ri-eye-off-line'></i>
                          </button>
                          <button className='compare' type='button'>
                            <i className='ri-heart-line'></i>
                          </button>
                          <button className='add-to-cart' type='button'>
                            <i className='ri-shopping-cart-2-line'></i>
                          </button>
                        </div>
                      </div>
                      <div className='product-info'>
                        <h4>
                          <Link href='/shop-details'>
                            <a>Black Backpack</a>
                          </Link>
                        </h4>
                        <div className='product-rating'>
                          <span className='rating'>4.8</span>
                          <i className='ri-star-fill'></i>
                          <span className='total-review'>(200)</span>
                        </div>
                        <h6 className='product-price'>From $1,412</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='page-navigation'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <ul className='page-nav'>
                        <li>
                        <Link href='/shop-details'>
                          <a>
                            {' '}
                            <i className='ri-arrow-left-s-line'></i>{' '}
                          </a>
                          </Link>
                        </li>
                        <li>
                        <Link href='/shop-details'>
                          <a className='active'>
                            1
                          </a>
                          </Link>
                        </li>
                        <li>
                        <Link href='/shop-details'>
                          <a>2</a>
                          </Link>
                        </li>
                        <li>
                        <Link href='/shop-details'>
                          <a>3</a>
                          </Link>
                        </li>
                        <li>
                        <Link href='/shop-details'>
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
      </div>
    </>
  );
};

export default ShopNoSidebarContent;
