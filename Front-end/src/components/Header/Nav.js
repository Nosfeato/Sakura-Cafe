/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Local import
 */

/**
 * Code
 */

const Nav = () => (
  <ul id="nav-links-list">
    <li className="nav-link"><Link to="/">Home</Link></li>
    <li className="nav-link"><Link to="/products">Products</Link></li>
    <li className="nav-link"><Link to="/map">Map</Link></li>
  </ul>
);

/* Nav.propTypes */

/**
 * Export
 */
export default Nav;
