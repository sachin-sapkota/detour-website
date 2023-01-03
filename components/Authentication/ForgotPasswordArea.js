import React from 'react';

const ForgotPasswordArea = () => {
  return (
    <>
      <section className='Login-wrap pt-100 pb-100'>
        <div className='container'>
          <div className='col-xl-6 offset-xl-3 col-lg-6 offset-lg-3 col-md-8 offset-md-2'>
            <div className='login-form'>
              <div className='login-header bg-minsk'>
                <h2 className='text-left'>Password Reset</h2>
                <span>Get your Password Back</span>
              </div>
              <div className='login-body'>
                <form className='form-wrap' action='#'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <p>
                        We will send a verification code to your mail to reset
                        your password.{' '}
                      </p>
                    </div>
                    <div className='col-lg-12'>
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
                          id='pwd'
                          name='pwd'
                          type='password'
                          placeholder='Old Password'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-group mb-0'>
                        <button className='btn v6'>Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPasswordArea;
