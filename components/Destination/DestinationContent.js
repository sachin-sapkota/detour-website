import React from 'react';

const DestinationContent = () => {
  return (
    <>
      <section className='tour-details-wrap pt-70 pb-70'>
        <div className='container'>
          <div className='row gx-5'>
            <div className='col-xl-8 col-lg-8 col-md-12 col-12'>
              <div className='tour-details-info'>
                <h4>Tour Details</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>

                <div className='row gx-4 mt-30 align-items-center'>
                  <div className='col-lg-6  mb-25'>
                    <div className='post-img'>
                      <img src='/images/blog/post-1.jpg' alt='Image' />
                    </div>
                  </div>
                  <div className='col-lg-6 mb-25'>
                    <div className='post-img'>
                      <img src='/images/blog/post-2.jpg' alt='Image' />
                    </div>
                  </div>
                  <div className='col-md-12 mb-25'>
                    <div className='post-img'>
                      <img src='/images/tour/tour-3.jpg' alt='Image' />
                    </div>
                  </div>
                </div>

                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-12 col-12'>
              <div className='sidebar'>
                <div className='sidebar-widget tour-map mb-50'>
                  <h4>View Place In Map</h4>
                  <div className='map style2'>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd'></iframe>
                  </div>
                </div>
                <div className='sidebar-widget tour-book'>
                  <h4>Book This Tour Now </h4>
                  <div
                    className='input-group date'
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DestinationContent;
