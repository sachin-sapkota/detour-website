import React, { useState } from 'react';
import Link from 'next/link';

const ShopDetailsContent = ({ shopImage }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <section className='product-details-wrap pt-100'>
        <div className='container'>
          <div className='row gx-5'>
            <div className='col-lg-6'>
              <div className='product-gal_wrap'>
                <div className=' gallery-top'>
                  <div className='product-large-img'>
                    <span className='discount-price'>50% Off</span>
                    {shopImage.length > 0 && (
                      <div className='product-thumb'>
                        <img src={shopImage[index].image} alt='Image' />
                      </div>
                    )}
                  </div>
                </div>
                <div className=' gallery-thumbs'>
                  {shopImage.map((image, index) => (
                    <div className='product-thumb' key={index}>
                      <img
                        src={image.image}
                        alt='Image'
                        onClick={() => setIndex(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='single-product-details'>
                <div className='single-product-title'>
                  <div className='single-product-review'>
                    <div className='single-product-review-left'>
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
                      <span>(36)</span>
                    </div>
                  </div>
                  <h2>Large Suitcase</h2>
                  <h3>
                    Price: <span className='discount'>$370</span> <span>$300</span>
                  </h3>
                </div>
                <div className='single-product-desc'>
                  <p>
                    Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                    Ipsum non facilis corporis modi consequatur. Iure
                    perferendis dicta illum deleniti veritatis vero tempora
                    maxime ducimus quaerat, iusto omnis magni doloribus.
                  </p>
                  <p>
                    Repellat exercitationem odio rerum doloremque quod enim iste
                    doloribus fugit incidunt suscipit, totam illo molestias!
                    Beatae error reprehenderit autem ex sit laudantium
                    praesentium quibusdam optio, ab omnis magnam nobis quisquam
                    enim ad sint
                  </p>
                </div>
                <div className='single-product-option'>
                  <div className='product-quantity'>
                    <div className='qtySelector'>
                      <span className='ri-subtract-line decreaseQty'></span>
                      <input type='text' className='qtyValue' value='1' onChange={e=>e} />
                      <span className='las la-plus increaseQty'></span>
                    </div>
                  </div>
                  <div className='add-cart'>
                    <button type='button' className='btn v3'>
                      <span>Add To Cart </span>
                      <i className='ri-shopping-cart-line'></i>
                    </button>
                  </div>
                  <div className='add-wishlist'>
                    <button type='submit' className='btn v8'>
                      <span>Add To Wishlist </span>
                      <i className='ri-heart-line'></i>
                    </button>
                  </div>
                </div>
                <div className='product-more-option'>
                  <div className='product-more-option-item'>
                    <h6>Category :</h6>
                    <Link href='/shop-left-sidebar'>
                      <a>Travel Bag</a>
                    </Link>
                  </div>
                  <div className='product-more-option-item'>
                    <h6>Share On :</h6>
                    <ul className='social-profile v1'>
                      <li>
                        <a target='_blank' href='https://facebook.com'>
                          <i className='ri-facebook-fill'></i>
                        </a>
                      </li>
                      <li>
                        <a target='_blank' href='https://twitter.com'>
                          <i className='ri-twitter-fill'></i>
                        </a>
                      </li>
                      <li>
                        <a target='_blank' href='https://instagram.com'>
                          <i className='ri-instagram-line'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row ptb-100'>
            <div className='col-lg-12'>
              <div className='product-description-box'>
                <div className='row gx-5'>
                  <div className='col-lg-12'>
                    <div className='product_desc'>
                      <h3>Description</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row gx-5 pb-70'>
            <div className='col-lg-6'>
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
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
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
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 mb-30'>
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
                      <button type='submit' className='btn v7'>
                        Submit <i className='ri-logout-circle-r-line'></i>
                      </button>
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

ShopDetailsContent.defaultProps = {
  shopImage: [
    {
      id: 1,
      image: '/images/product/single-product-1.jpg',
    },
    {
      id: 2,
      image: '/images/product/single-product-2.jpg',
    },
    {
      id: 3,
      image: '/images/product/single-product-3.jpg',
    },
    {
      id: 3,
      image: '/images/product/single-product-4.jpg',
    },
  ],
};

export default ShopDetailsContent;
