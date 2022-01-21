import Link from 'next/link';

const RecommendTour = ({ title, subTitle, bgStyle }) => {
  return (
    <>
      <section className={`recommend-tour-area ${bgStyle} ptb-100`}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-title text-center style4 mb-40'>
                {title && <span>{title}</span>}

                <h2>{subTitle}</h2>
              </div>
            </div>
          </div>
          
          <div className='row'>
            <div className='col-md-12'>
              <div className='rec-wrap'>
                <div className='recommend-tour-item style2'>
                  <div className='recommend-tour-bg bg-f rec-bg-1'></div>
                  <div className='recommend-tour-info'>
                    <p>27+ Place</p>
                    <h4>
                      <Link href='/tour-details'>
                        <a>Australia</a>
                      </Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <Link href='/tour-details'>
                      <a className='link'>
                        Explore <i className='ri-logout-circle-r-line'></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='recommend-tour-item style2'>
                  <div className='recommend-tour-bg bg-f rec-bg-2'></div>
                  <div className='recommend-tour-info'>
                    <p>15+ Place</p>
                    <h4>
                      <Link href='/tour-details'>
                        <a>Newzealand</a>
                      </Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <Link href='/tour-details'>
                      <a className='link'>
                        Explore <i className='ri-logout-circle-r-line'></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='recommend-tour-item style2'>
                  <div className='recommend-tour-bg bg-f rec-bg-3'></div>
                  <div className='recommend-tour-info'>
                    <h4>
                      <Link href='/tour-details'>
                        <a>Egypt</a>
                      </Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <p>20+ Place</p>
                    <Link href='/tour-details'>
                      <a className='link'>
                        Explore <i className='ri-logout-circle-r-line'></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='recommend-tour-item style2'>
                  <div className='recommend-tour-bg bg-f rec-bg-4'></div>
                  <div className='recommend-tour-info'>
                    <p>30+ Place</p>
                    <h4>
                      <Link href='/tour-details'>
                        <a>Africa</a>
                      </Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <Link href='/tour-details'>
                      <a className='link'>
                        Explore <i className='ri-logout-circle-r-line'></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='recommend-tour-item style2'>
                  <div className='recommend-tour-bg bg-f rec-bg-5'></div>
                  <div className='recommend-tour-info'>
                    <p>15+ Place</p>
                    <h4>
                    <Link href="/tour-details">
                      <a >Africa</a>
                      </Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <Link href="/tour-details">

                    <a className='link'>
                      Explore <i className='ri-logout-circle-r-line'></i>
                    </a>
                    </Link>
                  </div>
                </div>
                <div className='recommend-tour-item style2'>
                  <div className='recommend-tour-bg bg-f rec-bg-6'></div>
                  <div className='recommend-tour-info'>
                    <p>27+ Place</p>
                    <h4>
                    <Link href="/tour-details">
                      <a>Africa</a>
                      </Link>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Excepturi saepe vel ea.
                    </p>
                    <Link href="/tour-details">

                    <a className='link'>
                      Explore <i className='ri-logout-circle-r-line'></i>
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

export default RecommendTour;
