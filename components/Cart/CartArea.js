import React from 'react';
import Link from 'next/link';

const CartArea = () => {
  return (
    <>
      <section className='wishlist-wrap ptb-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-xxl-8 col-xl-9'>
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
                                    defaultValue='1'
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
                                    defaultValue='1'
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
                                    defaultValue='1'
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
                <div className='col-sm-12 text-sm-end'>
                  <Link href='/checkout'>
                    <a className='btn v7'>Continue Shopping</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-3'>
              <div className='checkout-details smt-30'>
                <div className='content-box-title'>
                  <h5>Total Bill</h5>
                </div>
                <div className='bill-details'>
                  <div className='bill-item-wrap'>
                    <div className='bill-item'>
                      <div className='bill-item-name'>
                        <p>Leather Backpack</p>
                      </div>
                      <div className='bill-item-price'>
                        <span>$248.00</span>
                      </div>
                    </div>
                    <div className='bill-item'>
                      <div className='bill-item-name'>
                        <p>Raybon Sunglass </p>
                      </div>
                      <div className='bill-item-price'>
                        <span>$78.00</span>
                      </div>
                    </div>
                    <div className='bill-item'>
                      <div className='bill-item-name'>
                        <p>Adiddas Shoe</p>
                      </div>
                      <div className='bill-item-price'>
                        <span>$89.00</span>
                      </div>
                    </div>
                  </div>
                  <div className='subtotal-wrap'>
                    <div className='subtotal-item'>
                      <div className='subtotal-item-left'>
                        <h6>Subtotal</h6>
                      </div>
                      <div className='subtotal-item-right'>
                        <span>$415.00</span>
                      </div>
                    </div>
                    <div className='subtotal-item'>
                      <h6>Have A Promo Code?</h6>
                      <div className='form-group mb-0 w-100'>
                        <input
                          className='w-100'
                          type='text'
                          placeholder='Enter code here'
                        />
                        <button type='submit'>Apply</button>
                      </div>
                    </div>
                    <div className='subtotal-item'>
                      <div className='subtotal-item-left'>
                        <p>Shipping Charge</p>
                      </div>
                      <div className='subtotal-item-right'>
                        <p>$0.00</p>
                      </div>
                    </div>
                  </div>
                  <div className='total-wrap'>
                    <h5>Total Amount</h5>
                    <span>$444.00</span>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='select-method'>
                    <div>
                      <input type='radio' id='test1' name='radio-group' />
                      <label htmlFor='test1'>Cash On Delivery</label>
                    </div>
                    <div>
                      <input type='radio' id='test2' name='radio-group' />
                      <label htmlFor='test2'>Card</label>
                    </div>
                    <div>
                      <input type='radio' id='test3' name='radio-group' />
                      <label htmlFor='test3'>Check</label>
                    </div>
                  </div>
                </div>
                <div className='col-lg-12 mt-3'>
                  <Link href='/checkout'>
                    <button type='button' className='btn v5'>
                      Proceed To Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartArea;
