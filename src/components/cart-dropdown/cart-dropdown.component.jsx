import React from 'react';
import {connect} from 'react-redux';

import CustomButtton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item..component'; 

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
  <div className= 'cart-dropdown'>
    <div className= 'cart-items'>
      {
      cartItems.map(cartItem => <CartItem key= {cartItem.id} item= {cartItem}/>)
      }
    </div>
    <CustomButtton> GO TO CHECKOUT </CustomButtton>
  </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);