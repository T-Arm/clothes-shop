import React from 'react';

import CustomButtton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className= 'cart-dropdown'>
    <div className= 'cart-items'>
    </div>
    <CustomButtton> GO TO CHECKOUT </CustomButtton>
  </div>
)

export default CartDropdown;