/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Local import
 */
import './cart.scss';

/**
 * Code
 */

const Cart = () => (
  <>
    <button id="sign__up__button" type="button"><Link to="/cart"><i className="fa fa-shopping-cart"></i></Link></button>
  </>
);


/**
 * Export
 */
export default Cart;
