import React, { useState } from 'react';

const TourDetailsContent = ({ data }) => {
  const [clicked, setClicked] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className='container pt-100'>
        <div className='row gx-5'>
          <div className='col-xl-9 col-lg-8 col-md-12 col-12'>
            <div className='tour-details-info'>
              <div className="single-img">
                <img src="/images/tour/single-tour-1.jpg" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
              </p>
              <p>
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
              </p>

              <div className='tour-details-feature'>
                <h4>Included</h4>
                <ul>
                  <li>
                    <i className='ri-arrow-right-s-line'></i> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </li>
                  <li>
                    <i className='ri-arrow-right-s-line'></i> 
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                  </li>
                  <li>
                    <i className='ri-arrow-right-s-line'></i> 
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                  </li>
                  <li>
                    <i className='ri-arrow-right-s-line'></i> Lorem ipsum dolor sit
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                  </li>
                </ul>
              </div>

              <div className='tour-details-feature'>
                <h4>Included</h4>
                <ul>
                  <li>
                    <i className='ri-arrow-right-s-line'></i> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </li>
                  <li>
                    <i className='ri-arrow-right-s-line'></i> 
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                  </li>
                  <li>
                    <i className='ri-arrow-right-s-line'></i> 
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,
                  </li>
                  <li>
                    <i className='ri-arrow-right-s-line'></i> Lorem ipsum dolor sit
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                  </li>
                </ul>
              </div>
              
              <div className='tour-plan-details'>
                <h4>Trip Plan</h4>
                <div className='tour-plan-item'>
                  <h6>Day 01</h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Maiores, alias quo perspiciatis at, laborum laboriosam!
                  </p>
                </div>
                <div className='tour-plan-item'>
                  <h6>Day 02</h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Maiores, alias quo perspiciatis at, laborum laboriosam!
                  </p>
                </div>
                <div className='tour-plan-item'>
                  <h6>Day 03</h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Maiores, alias quo perspiciatis at, laborum laboriosam!
                  </p>
                </div>
                <div className='tour-plan-item'>
                  <h6>Day 04</h6>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Maiores, alias quo perspiciatis at, laborum laboriosam!
                  </p>
                </div>
              </div>
              <div className='tour-faq'>
                <h4>FAQ</h4>
                <div className='accordion' id='accordionExample'>
                  {data.length > 0 &&
                    data.map((data, index) => (
                      <div className='accordion-item' onClick={() => toggle(index)} key={index}>
                        <h2 className='accordion-header' id='headingfour'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                          >
                            {data.question}
                          </button>
                        </h2>
                        <div
                          id='collapsefour'
                          className={
                            clicked === index
                              ? 'accordion-collapse show'
                              : 'accordion-collapse collapse'
                          }
                        >
                          <div className='accordion-body'>
                            {clicked === index && <p>{data.answer}</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className='post-comment-wrap'>
              <h4 className='comment-title'>2 Reviews</h4>
              <div className='comment-item'>
                <div className='comment-author_img'>
                  <img src='/images/blog/avatar-1.jpg' alt='Image' />
                </div>
                <div className='comment-author_text'>
                  <div className='comment-author_info'>
                    <h6>Anthony J. Ruiz</h6>
                    <ul className='rating-star'>
                      <li>
                        <i className='las la-star'></i>
                      </li>
                      <li>
                        <i className='las la-star'></i>
                      </li>
                      <li>
                        <i className='las la-star'></i>
                      </li>
                      <li>
                        <i className='las la-star'></i>
                      </li>
                      <li>
                        <i className='lar la-star'></i>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </div>
              </div>
              <div className='comment-item'>
                <div className='comment-author_img'>
                  <img src='/images/blog/avatar-2.jpg' alt='Image' />
                </div>
                <div className='comment-author_text'>
                  <div className='comment-author_info'>
                    <h6>Andrea F. Kelley</h6>
                    <ul className='rating-star'>
                      <li>
                        <i className='las la-star'></i>
                      </li>
                      <li>
                        <i className='las la-star'></i>
                      </li>
                      <li>
                        <i className='las la-star'></i>
                      </li>
                      <li>
                        <i className='las la-star'></i>
                      </li>
                      <li>
                        <i className='lar la-star'></i>
                      </li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </div>
              </div>
            </div>
            <div className='comment-form-wrap'>
              <div className='comment-form-title'>
                <h4>Write Your Comment</h4>
              </div>
              <form action='#' className='comment-form'>
                <div className='row gx-3'>
                  <div className='col-lg-6'>
                    <div className='form-group s1'>
                      <input type='text' placeholder='Your  Full Name*' />
                    </div>
                    <div className='form-group s2'>
                      <input type='email' placeholder='Email Address*' />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='form-group v1'>
                      <textarea
                        name='review-msg'
                        id='review-msg'
                        cols='30'
                        rows='10'
                        placeholder='Your comments...'
                      ></textarea>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='checkbox'>
                      <input type='checkbox' id='ts' />
                      <label htmlFor='ts'>
                        I Agree With Your Trams & Conditions.
                      </label>
                    </div>
                    <button type="submit" className='btn v7'>
                      Submit <i className='ri-logout-circle-r-line'></i>{' '}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-md-12 col-12'>
            <div className='sidebar'>
              <div className='sidebar-widget tour-book'>
                <h4>Book This Tour Now </h4>
                <div
                  className='input-group'
                >
                  <input
                    className='form-control'
                    type='date'
                    placeholder='Arrival'
                  />
                </div>
                <div
                  className='input-group'
                >
                  <input
                    className='form-control'
                    type='date'
                    placeholder='Departure'
                  />
                </div>
                <div className='select-person'>
                  <select className='tour-filter-one'>
                    <option value='1'>Person</option>
                    <option value='2'>1 Person</option>
                    <option value='3'>2 Person</option>
                  </select>
                  <span className='hero-filter-down-arrow'>
                    <i className='ri-arrow-down-s-line'></i>
                  </span>
                </div>
                <div className='form-group'>
                  <input type='text' placeholder='Destination' />
                </div>
                <button type='button' className='book-btn'>
                  Book This Tour Now <i className='ri-logout-circle-r-line'></i>{' '}
                </button>
              </div>
              <div className='sidebar-widget tour-map'>
                <h4>View Place In Map</h4>
                <div className='map'>
                  <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd'></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TourDetailsContent.defaultProps = {
  data: [
    {
      question: 'What languages do you offer tours in?',
      answer:
        'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question:
        'Are there any extra fees I have to pay?',
      answer:
        'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      question: 'How much does it cost to do a private tour?',
      answer:
        'Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ],
};

export default TourDetailsContent;
