import React from 'react';
import Link from 'next/link';

const Expertise = () => {
  return (
    <>
      <section className='service-wrap pt-100'>
        <div className='container'>
          <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='service-item style1 h-100'>
                <div className='service-info h-100'>
                  <video src='/videos/sample.mp4' className='w-100' controls />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='service-item style1'>
                <div className='service-info text-start'>
                  <h4 className='pb-20'>
                    Prévention & Orientation
                    Coordination de soins à l’étranger
                    Conseil international
                  </h4>
                  
                  <p className='pb-10'>CUSTOM, SCALABLE, TECH-ENABLED</p>
                  <div className='pb-10'>
                    <input type='radio' id='test1' name='radio-group' className='me-2' />
                    <label htmlFor='test1'>Prévention & Orientation</label>
                  </div>
                  <div className='pb-10'>
                    <input type='radio' id='test2' name='radio-group' className='me-2' />
                    <label htmlFor='test2'>Prévention & Orientation</label>
                  </div>
                  <div className='pb-10'>
                    <input type='radio' id='test3' name='radio-group' className='me-2' />
                    <label htmlFor='test3'>Prévention & Orientation</label>
                  </div>
                  <div className='pb-10'>
                    <input type='radio' id='test4' name='radio-group' className='me-2' />
                    <label htmlFor='test4'>Prévention & Orientation</label>
                  </div>
                  <div>
                    <span>Interested ? </span>
                    <Link href='/tours'>
                      <a className='btn v2 ms-5 get-started'>
                        Get started ->
                      </a>
                    </Link>
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

export default Expertise;
