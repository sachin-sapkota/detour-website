import { useState } from 'react';
import Link from 'next/link';
import InputRange from 'react-input-range';

const ShopLeftContent = () => {
  const [price, setPrice] = useState('');

  const handlePriceChange = (e) => {
    setPrice(e);
  };

  return (
    <>
      <div className='shop-wrap pt-100 pb-100'>
        <div className='container'>
          <div className='row gx-5'>
            <div className='col-xl-3 col-lg-4 order-xl-1 order-lg-1 order-md-2 order-2'>
              <div className='sidebar'>
                <div className='sidebar-widget category-widget'>
                  <h4>Category</h4>
                  <ul className='product-category-list'>
                    <li className='has-subcat'>
                      <a className='active' href='/shop-left-sidebar'>
                        Travel Bag <span>4</span>
                      </a>
                    </li>
                    <li className='has-subcat'>
                      <a href='/shop-left-sidebar'>
                        Shoe <span>3</span>
                      </a>
                    </li>
                    <li className='has-subcat'>
                      <a href='/shop-left-sidebar'>
                        RainCoat <span>3</span>
                      </a>
                    </li>
                    <li className='has-subcat'>
                      <a href='/shop-left-sidebar'>
                        Power Bank <span>2</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='sidebar-widget price-range-widget'>
                  <h4>Price</h4>
                  <div className='filter-sub-area'>
                    <InputRange
                      draggableTrack
                      maxValue={100}
                      minValue={0}
                      onChange={handlePriceChange}
                      value={price}
                    />
                    <div className='filter-title mt-20'>
                      <p className='mb-0'>
                        Price :<span>${price}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className='sidebar-widget new-product'>
                  <h4>Popular Products</h4>
                  <div className='new-product-wrap'>
                    <div className='new-product-item'>
                      <div className='new-product-img'>
                        <img
                          src='/images/product/product-thumb-1.jpg'
                          alt='Iamge'
                        />
                      </div>
                      <div className='new-product-info'>
                        <h6>
                          <Link href='/shop-details'>
                            <a>Orange Suitcase</a>
                          </Link>
                        </h6>
                        <span>$58.00</span>
                        <span className='discount'>$80</span>
                      </div>
                    </div>

                    <div className='new-product-item'>
                      <div className='new-product-img'>
                        <img
                          src='/images/product/product-thumb-2.jpg'
                          alt='Iamge'
                        />
                      </div>
                      <div className='new-product-info'>
                        <h6>
                          <Link href='/shop-details'>
                            <a>Olive Backpack</a>
                          </Link>
                        </h6>
                        <span>$98.00</span>
                      </div>
                    </div>

                    <div className='new-product-item'>
                      <div className='new-product-img'>
                        <img
                          src='/images/product/product-thumb-3.jpg'
                          alt='Iamge'
                        />
                      </div>
                      <div className='new-product-info'>
                        <h6>
                          <Link href='/shop-details'>
                            <a>Large Suitcase </a>
                          </Link>
                        </h6>
                        <span>$98.00</span>
                        <span className='discount'>$120</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-9 col-lg-8 order-xl-2 order-lg-2 order-md-1 order-1'>
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
                            <a className='active'>1</a>
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

export default ShopLeftContent;
