import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import CustomButtton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item..component'; 
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className= 'cart-dropdown'>
    <div className= 'cart-items'>
      {
      cartItems.map(cartItem => <CartItem key= {cartItem.id} item= {cartItem}/>)
      }
    </div>
    <CustomButtton onClick= {() => history.push('/checkout')}> GO TO CHECKOUT </CustomButtton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));