import React from 'react';
import MyAccountNavbar from '../../components/MyAccount.js/MyAccountNavbar';

const ShippingAddress = () => {
  return (
    <>
      <section className='Login-wrap pt-100 pb-100'>
        <div className='container'>
          <div className='row gx-5'>
      <MyAccountNavbar />
            <div className='col-lg-9'>
              <div className='tab-content'>
                <div>
                  <h2 className='account-title'>Shipping Address</h2>
                  <form
                    className='form-wrap'
                    action='php/form-process.php'
                    method='post'
                    id='contact_form'
                  >
                    <div
                      id='message'
                      className='alert alert-danger alert-dismissible fade'
                    ></div>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <input
                            id='name'
                            name='name'
                            type='text'
                            placeholder='Your  Full Name*'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Email Address*'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='form-group'>
                          <input
                            id='address_1'
                            name='address_1'
                            type='text'
                            placeholder='Address Line 1*'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='form-group'>
                          <input
                            id='address_2'
                            name='address_2'
                            type='text'
                            placeholder='Address Line 2*'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            id='city'
                            name='city'
                            placeholder='City'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <input
                            type='text'
                            id='state'
                            name='state'
                            placeholder='State'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <input
                            id='phone'
                            name='phone'
                            type='number'
                            placeholder='Phone Number'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <input
                            id='zip'
                            name='zip'
                            type='number'
                            placeholder='ZIP Code'
                          />
                        </div>
                      </div>
                      <div className='col-lg-12 text-center'>
                        <button type='submit' className='btn v5'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShippingAddress;
