import React from 'react';

const Expertise = () => {
  return (
    <>
      <section className='service-wrap pt-100'>
        <div className='container'>
          <div className='row mb-40 align-items-end'>
            <div className='col-md-12'>
              <div className='section-title style1 text-center'>
                <h2>
                  Over 25 Years of Expertise in<br/>
                  International Health Management and Medical Insurance
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-md-6 col-sm-12'>
              <div className='service-item style1'>
                <div className='service-info text-start'>
                  <p>CUSTOM, SCALABLE, TECH-ENABLED</p>
                  <br/>
                  <p>
                    Today’s healthcare systems are an increasing threat to your health,
                    often putting financial incentives over your wellbeing. 
                    It is important to have an independent health expert 
                    who truly acts in your interest, 
                    when it comes to health insurance as well as medicine.<br/>
                    <br/>
                    The SIP Medical Family Office® is the world-leading 
                    independent consultant for International Health Management 
                    and Global Health Insurance, based in Zurich, Switzerland.<br/>
                    <br/>
                    For over 20 years, individuals, families and companies as well 
                    as their advisors have been relying on our expertise to protect 
                    their health around the world.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='service-item style1 h-100'>
                <div className='service-info h-100'>
                  <video src='/videos/sample.mp4' className='w-100 mt-30' controls />
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
