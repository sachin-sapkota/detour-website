import React from 'react';

const CheckoutArea = () => {
  return (
    <>
      <div className='checkout-wrap pt-100 pb-70'>
        <div className='container'>
          <div className='row gx-4'>
            <div className='col-xl-8 col-lg-8 order-xl-1 order-lg-1 order-md-2 order-2'>
              <div className='content-box-title'>
                <h5>Shipping Details</h5>
              </div>
              <form action='#' className='checkout'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Your  Full Name*'
                        required
                      />
                    </div>
                    <div className='form-group'>
                      <input type='email' placeholder='Email Address*' />
                    </div>
                    <div className='form-group v1'>
                      <input type='text' placeholder=' Country*' />
                    </div>
                    <div className='form-group v1'>
                      <input type='text' placeholder=' State*' />
                    </div>
                    <div className='form-group v1'>
                      <input type='number' placeholder='Phone Number' />
                    </div>
                    <div className='form-group v1'>
                      <input type='number' placeholder=' ZIP Code*' />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group v1'>
                      <input type='text' placeholder='Company Name' required />
                    </div>
                    <div className='form-group v1'>
                      <input type='text' placeholder=' Address*' />
                    </div>
                    <div className='form-group v1'>
                      <input type='text' placeholder=' House/Street*' />
                    </div>
                    <div className='form-group v1'>
                      <input type='text' placeholder=' City*' />
                    </div>
                    <div className='form-group v1'>
                      <textarea
                        name='review-msg'
                        id='review-msg'
                        cols='30'
                        rows='10'
                        placeholder='Write A Note(Optional)'
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-xl-4 col-lg-4 order-xl-2 order-lg-2 order-md-1 order-1'>
              <div className='checkout-details'>
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
                  <button type='button' className='btn v5'>
                    Palce Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutArea;
