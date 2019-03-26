/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Cart from 'src/components/Cart';
/**
 * Local import
 */

/**
 * Code
 */

const Nav = () => (
  <ul id="nav-links-list">
    <li className="nav-link"><a href="/">Home</a></li>
    <li className="nav-link"><a href="/products">Products</a></li>
    <li className="nav-link"><a href="/map">Map</a></li>
    <li className="nav-link"><Cart /></li>
  </ul>
);

/* Nav.propTypes */

/**
 * Export
 */
export default Nav;
