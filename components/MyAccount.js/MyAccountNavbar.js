import React from 'react';
import Link from '../../utils/ActiveLink';

const MyAccountNavbar = () => {
  return (
    <>
 
        <div className='col-lg-3'>
          <ul className='nav nav-tabs user-tablist' id='myTab'>
            <Link href='/admin/profile' activeClassName='active'>
              <li className='nav-item'>
                <button className='nav-link'>Profile</button>
              </li>
            </Link>

            <Link href='/admin/shipping-address' activeClassName='active'>
              <li className='nav-item'>
                <button className='nav-link'>Shipping Address</button>
              </li>
            </Link>

            <Link href='/admin/my-orders' activeClassName='active'>
              <li className='nav-item'>
                <button className='nav-link'>My Orders</button>
              </li>
            </Link>
            <li className='nav-item'>
              <button className='nav-link'>Log Out</button>
            </li>
          </ul>
        </div>

    </>
  );
};

export default MyAccountNavbar;
