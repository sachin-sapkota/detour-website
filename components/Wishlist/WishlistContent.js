import React from 'react';
import Link from 'next/link';

const WishlistContent = () => {
  return (
    <>
      <section className='wishlist-wrap ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='wishlist-table '>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Items</th>
                      <th scope='col'>Unit Price</th>
                      <th scope='col'>Qunatity</th>
                      <th scope='col'>Total</th>
                      <th scope='col'>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className='wh_item'>
                          <img
                            src='/images/product/cart-thumb-1.jpg'
                            alt='Image'
                          />
                          <Link href='/shop-details'>
                            <a>Large Suitcase</a>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <p className='wh-tem-price'>$148.00</p>
                      </td>
                      <td>
                        <div className='wh_qty'>
                          <div className='product-quantity'>
                            <div className='qtySelector'>
                              <span className='las la-minus decreaseQty'></span>
                              <input
                                type='text'
                                className='qtyValue'
                                value='1'
                                onChange={e=>e}
                              />
                              <span className='las la-plus increaseQty'></span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className='wh-tem-price text-red'>$148.00</p>
                      </td>
                      <td>
                        <button type='button'>
                          <span className='las la-times'></span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='wh_item'>
                          <img
                            src='/images/product/cart-thumb-2.jpg'
                            alt='Image'
                          />
                          <Link href='/shop-details'>
                            <a>Leather backpack</a>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <p className='wh-tem-price'>$208.00</p>
                      </td>
                      <td>
                        <div className='wh_qty'>
                          <div className='product-quantity'>
                            <div className='qtySelector'>
                              <span className='las la-minus decreaseQty'></span>
                              <input
                                type='text'
                                className='qtyValue'
                                value='1'
                                onChange={e=>e}
                              />
                              <span className='las la-plus increaseQty'></span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className='wh-tem-price text-red'>$208.00</p>
                      </td>
                      <td>
                        <button type='button'>
                          <span className='las la-times'></span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='wh_item'>
                          <img
                            src='/images/product/cart-thumb-3.jpg'
                            alt='Image'
                          />
                          <Link href='/shop-details'>
                            <a>Travel Bag</a>
                          </Link>
                        </div>
                      </td>
                      <td>
                        <p className='wh-tem-price'>$300.00</p>
                      </td>
                      <td>
                        <div className='wh_qty'>
                          <div className='product-quantity'>
                            <div className='qtySelector'>
                              <span className='las la-minus decreaseQty'></span>
                              <input
                                type='text'
                                className='qtyValue'
                                value='1'
                                onChange={e=>e}
                              />
                              <span className='las la-plus increaseQty'></span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className='wh-tem-price text-red'>$200.00</p>
                      </td>
                      <td>
                        <button type='button'>
                          <span className='las la-times'></span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <Link href='/shop-left-sidebar'>
                <a className='btn v3'>Continue Shopping</a>
              </Link>
            </div>
            <div className='col-sm-6 text-sm-end'>
              <Link href='/shop-details'>
                <a className='btn v7'>Proceed To Checkout</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishlistContent;
