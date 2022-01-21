import React from 'react';
import Link from 'next/link';
import MyAccountNavbar from '../../components/MyAccount.js/MyAccountNavbar';

const MyOrders = () => {
  return (
    <>
      <section className='Login-wrap pt-100 pb-100'>
        <div className='container'>
          <div className='row gx-5'>
            <MyAccountNavbar />
            <div className='col-lg-9'>
              <div className='tab-content' id='myTabContent'>
                <div>
                  <h2 className='account-title'>My Orders</h2>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyOrders;
