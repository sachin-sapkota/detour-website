import React from 'react';
import Link from 'next/link';

const LoginArea = () => {
  return (
    <>
      <section className='Login-wrap pt-100 pb-100'>
        <div className='container'>
          <div className='col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2'>
            <div className='login-form'>
              <div className='login-header bg-minsk'>
                <h2 className='text-left'>Log In</h2>
                <span>Keep Connected With Us</span>
              </div>
              <div className='login-body'>
                <form className='form-wrap' action='#'>
                  <div className='row'>
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
                          placeholder='Password'
                        />
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-6'>
                      <div className='form_group mb-20'>
                        <input type='checkbox' id='test_1' />
                        <label htmlFor='test_1'>Remember Me</label>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-6 text-end mb-20'>
                      <Link href='/forgot-password'>
                        <a className='link'>Forgot Password?</a>
                      </Link>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-group'>
                        <button className='btn v7'>Log In</button>
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-group text-center'>
                        <span className='or'>Or Login With</span>
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='form-group'>
                        <ul className='social-profile v3 text-center mt-0'>
                          <li>
                            <a target='_blank' href='https://instagram.com'>
                              <i className='lab la-instagram'></i>
                            </a>
                          </li>
                          <li>
                            <a target='_blank' href='https://twitter.com'>
                              <i className='lab la-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a target='_blank' href='https://facebook.com'>
                              <i className='lab la-facebook-f'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-12 text-center'>
                      <p className='mb-0'>
                        Don’t Have an Account?{' '}
                        <Link href='/register'>
                          <a className='link'>Create One</a>
                        </Link>
                      </p>
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

export default LoginArea;
