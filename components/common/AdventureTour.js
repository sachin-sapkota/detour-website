import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
// Import Swiper React components
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
  loop: true,
  margin: 20,
  nav: false,
  mouseDrag: true,
  dots: true,
  autoplay: true,
  smartSpeed: 500,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },

    768: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },

    1000:{
        items:1.5
    }
},

};



const AdventureTour = ({ radiusStyle, shape,pb44 }) => {
  const [display, setDisplay] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
    setDisplay(true);
    setisMounted(false);
  }, []);

  return (
    <>
      <section className='adventure-tour-wrap'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-title style4 text-center mb-40'>
                <span>PLAN YOUR NEXT</span>
                <h2>Adventure In Summer</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={`tour-slider-v1 ${pb44} owl-theme`}>
        {display ? (
          <OwlCarousel {...options}>
            <div className='tour-details-item bg-f tour-bg-4 style1'>
              <span className='tour-discount style4'>Up To 30% Off</span>
              <div className='single-tour-info  style4'>
                <div className='feature-tour-meta'>
                  <div className='feature-tour-time'>
                    <i className='ri-time-line'></i>2 days
                  </div>
                  <div className='feature-tour-review'>
                    <span className='rating'>4.8</span>
                    <i className='ri-star-fill'></i>
                    <span className='total-review'>(99)</span>
                  </div>
                </div>
                <div className='tour-details'>
                  <h4>Sydney Tour</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </div>
                <div className='tour-btn'>
                  <Link href='/tour-details'>
                    <a className='btn v3'>
                      Book Now <i className='ri-logout-circle-r-line'></i>{' '}
                    </a>
                  </Link>
                  <Link href='/tour-details'>
                    <a className='btn v4'>
                      Tour Details <i className='ri-logout-circle-r-line'></i>{' '}
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='tour-details-item bg-f tour-bg-5 style1'>
              <span className='tour-discount style4'>Up To 50% Off</span>
              <div className='single-tour-info  style4'>
                <div className='feature-tour-meta'>
                  <div className='feature-tour-time'>
                    <i className='ri-time-line'></i>5 days
                  </div>
                  <div className='feature-tour-review'>
                    <span className='rating'>4.8</span>
                    <i className='ri-star-fill'></i>
                    <span className='total-review'>(200)</span>
                  </div>
                </div>
                <div className='tour-details'>
                  <h4>Makao Tour</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </div>
                <div className='tour-btn'>
                  <Link href='/tour-details'>
                    <a className='btn v3'>
                      Book Now <i className='ri-logout-circle-r-line'></i>{' '}
                    </a>
                  </Link>
                  <Link href='/tour-details'>
                    <a className='btn v4'>
                      Tour Details <i className='ri-logout-circle-r-line'></i>{' '}
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='tour-details-item bg-f tour-bg-6 style1'>
              <span className='tour-discount  style4'>Up To 40% Off</span>
              <div className='single-tour-info style4'>
                <div className='feature-tour-meta'>
                  <div className='feature-tour-time'>
                    <i className='ri-time-line'></i>
                    10 days
                  </div>
                  <div className='feature-tour-review'>
                    <span className='rating'>4.8</span>
                    <i className='ri-star-fill'></i>
                    <span className='total-review'>(200)</span>
                  </div>
                </div>
                <div className='tour-details'>
                  <h4>Thailand Experience</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </div>
                <div className='tour-btn'>
                  <Link href='/tour-details'>
                    <a className='btn v3'>
                      Book Now <i className='ri-logout-circle-r-line'></i>{' '}
                    </a>
                  </Link>
                  <Link href='/tour-details'>
                    <a className='btn v4'>
                      Tour Details <i className='ri-logout-circle-r-line'></i>{' '}
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='tour-details-item bg-f tour-bg-7 style1'>
              <span className='tour-discount style4'>Up To 40% Off</span>
              <div className='single-tour-info  style4'>
                <div className='feature-tour-meta'>
                  <div className='feature-tour-time'>
                    <i className='ri-time-line'></i>
                    10 days
                  </div>
                  <div className='feature-tour-review'>
                    <span className='rating'>4.8</span>
                    <i className='ri-star-fill'></i>
                    <span className='total-review'>(200)</span>
                  </div>
                </div>
                <div className='tour-details'>
                  <h4>Slora Experience</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </div>
                <div className='tour-btn'>
                  <Link href='/tour-details'>
                    <a className='btn v3'>
                      Book Now <i className='ri-logout-circle-r-line'></i>{' '}
                    </a>
                  </Link>
                  <Link href='/tour-details'>
                    <a className='btn v4'>
                      Tour Details <i className='ri-logout-circle-r-line'></i>{' '}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default AdventureTour;
